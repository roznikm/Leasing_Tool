const mongoose = require('mongoose'); 

const leaseSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: { type: String, required: true},
    net_lease_price: { type: Number, required: true },
    residual_value: { type: Number, required: true },
    lease_rate_annual: { type: Number, required: true },
    gst: { type: Number, default: 0.05 },
    pst: { type: Number, default: 0.08 },
    term_months: { type: Number, default: 48},
    start_date: { type: Date, default: Date.now },
    payment_frequency: { type: String, default: "Weekly"},
    lease_type: { type: String, required: true }
});

module.exports = mongoose.model('Lease', leaseSchema); 