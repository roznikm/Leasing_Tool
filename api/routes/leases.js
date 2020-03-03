const express = require('express'); 
const router = express.Router(); 
const mongoose = require('mongoose');

const Lease = require('../models/lease');

// @route GET /leases
// @desc GET all leases 
// @access Public 
router.get('/', (req, res, next) => {
    Lease.find()
        .select('-__v')
        .sort({ date: -1 })
        .exec()
        .then(docs => res.json(docs))
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
});

// @route POST /leases
// @desc Create a lease
// @access Public

router.post('/', (req, res, next) => {
    const lease = new Lease({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        net_lease_price: req.body.net_lease_price,
        residual_value: req.body.residual_value,
        lease_rate_annual: req.body.lease_rate_annual,
        gst: req.body.gst,
        pst: req.body.pst,
        term_months: req.body.term_months,
        start_date: req.body.start_date,
        payment_frequency: req.body.payment_frequency,
        lease_type: req.body.lease_type
    });
    lease.save()
    .then(result => res.json(result))
    .catch(err => {
        res.status(500).json({
            error: err
        });
    });
});

// @route GET /leases/:leaseId
// @desc GET a lease
// @access Public 
router.get('/:leaseId', (req, res, next) => {
    const id = req.params.leaseId;
    Lease.findById(id)
        .exec()
        .then(doc => {
            console.log("From Database", doc);
            if (doc) {
                res.status(200).json({
                    lease: doc,
                    request: {
                        type: 'GET',
                        description: 'GET all leases',
                        url: req.protocol + '://' + req.get('host') + '/leases'
                    }
                });
            } else {
                res.status(404).json({message: 'No valid entry found for provided ID'});
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({error: err}); 
        });
});

// @route PATCH /items/:leaseId
// @desc Edit a lease by setting an array with object "propName": "variable", "value": "something"
// @ access Public 
router.patch('/:leaseId', (req, res, next) => {
    const id = req.params.leaseId;
    const updateOps = {};
    for (const ops of req.body) {
        updateOps[ops.propName] = ops.value; 
    };

    Lease.update({ _id: id }, { $set: updateOps })
        .exec()
        .then(result => {
            console.log(result);
            res.status(200).json({
                message: 'Lease updated',
                request: {
                    type: 'GET',
                    url: req.protocol + '://' + req.get('host') + req.originalUrl
                }
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
});

// @route DELETE /items/:leaseId
// @desc Delete a lease
// @access Public 
router.delete('/:leaseId', (req, res, next) => {
    Lease.findById( req.params.leaseId)
        .then(result => result.remove().then(() => res.json({ success: true })))
        .catch(err => res.status(404).json({ success: false }));
});

module.exports = router; 