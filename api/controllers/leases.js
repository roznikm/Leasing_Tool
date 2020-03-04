const mongoose = require('mongoose'); 
const Lease = require('../models/Lease');

// @desc    Get all leases
// @route   GET /api/leases
// @access  Public
exports.getLeases = async (req, res, next) => {
  try {
    const leases = await Lease.find();

    return res.status(200).json({
      success: true,
      leases: leases
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: 'Server Error'
    });
  }
};

// @desc    Add lease
// @route   POST /leases
// @access  Public
exports.addLease = async (req, res, next) => {
  try {
    const {
      name,
      net_lease_price,
      residual_value,
      lease_rate_annual,
      gst,
      pst,
      term_months,
      start_date,
      payment_frequency,
      lease_type
    } = req.body;

    const lease = await Lease.create(req.body);

    return res.status(200).json({
      success: true,
      leases: lease
    });
  } catch (err) {
    if (err.name === 'ValidationError') {
      const messages = Object.values(err.errors).map(val => val.message);

      return res.status(400).json({
        success: false,
        error: messages
      });
    } else {
      return res.status(500).json({
        success: false,
        error: 'Server Error'
      });
    }
  }
};

// @desc    Delete transaction
// @route   DELETE /api/v1/transactions/:id
// @access  Public
exports.deleteLease = async (req, res, next) => {
  try {
    const lease = await Lease.findById(req.params.id);

    if (!lease) {
      return res.status(404).json({
        success: false,
        error: 'No lease found'
      });
    }

    await lease.remove();

    return res.status(200).json({
      success: true,
      lease: {}
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: 'Server Error'
    });
  }
};
