const express = require('express');
const router = express.Router();
const {
  getLeases,
  addLease,
  deleteLease
} = require('../controllers/leases');

router
  .route('/')
  .get(getLeases)
  .post(addLease);

router.route('/:id').delete(deleteLease);

module.exports = router;
