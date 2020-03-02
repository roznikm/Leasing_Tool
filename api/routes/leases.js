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
        .then(docs => {
            const response = {
                count: docs.length,
                leases: docs.map(doc => {
                    return {
                        _id: doc._id,
                        name: doc.name,
                        net_lease_price: doc.net_lease_price,
                        residual_value: doc.residual_value,
                        lease_rate_annual: doc.lease_rate_annual,
                        gst: doc.gst,
                        pst: doc.pst,
                        term_months: doc.term_months,
                        start_date: doc.start_date,
                        payment_frequency: doc.payment_frequency,
                        lease_type: doc.lease_type,
                        request: {
                            type: 'GET',
                            url: req.protocol + '://' + req.get('host') + req.originalUrl +'/'+ doc._id
                        }
                    }
                })
            };
            res.status(200).json(response);
        })
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
    .then(result => {
        console.log(result);
        res.status(201).json({
            message: "Created lease successfully",
            createdLease: {
                _id: result._id,
                name: result.name,
                net_lease_price: result.net_lease_price,
                residual_value: result.residual_value,
                lease_rate_annual: result.lease_rate_annual,
                gst: result.gst,
                pst: result.pst,
                term_months: result.term_months,
                start_date: result.start_date,
                payment_frequency: result.payment_frequency,
                lease_type: result.lease_type,
                request: {
                    type: 'GET',
                    url: req.protocol + '://' + req.get('host') + req.originalUrl + '/' + result._id
                }
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
    const id = req.params.leaseId;
    Lease.remove({ _id: id })
        .exec()
        .then(result => {
            res.status(200).json({
                message: 'Product deleted',
                request: {
                    type: 'POST',
                    url: req.protocol + '://' + req.get('host') + '/leases',
                    body: { 
                        name: 'String all caps',
                        net_lease_price: 'Number',
                        residual_value: 'Number',
                        lease_rate_annual: 'Number',
                        gst: 'Number',
                        pst: 'Number',
                        term_months: 'Number',
                        start_date: 'Date',
                        payment_frequency: 'Number',
                        lease_type: 'String all caps'
                        }
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

module.exports = router; 