import { v4 as uuid } from 'uuid';
import {
  GET_LEASES,
  GET_LEASE,
  ADD_LEASE,
  EDIT_LEASE,
  DELETE_LEASE
} from '../actions/types';

const initialState = {
  leases: [
    {
      _id: uuid(),
      name: 'Mitch Inc',
      net_lease_price: 50000,
      residual_value: 10000,
      lease_rate_annual: 0.06,
      gst: 0.05,
      pst: 0.06,
      term_months: 48,
      start_date: '2019-04-20',
      payment_frequency: 'WEEKLY',
      lease_type: 'NEW'
    },
    {
      _id: uuid(),
      name: 'Doug Black Inc',
      net_lease_price: 80000,
      residual_value: 20000,
      lease_rate_annual: 0.07,
      gst: 0.05,
      pst: 0.06,
      term_months: 48,
      start_date: '2018-02-10',
      payment_frequency: 'WEEKLY',
      lease_type: 'USED'
    },
    {
      _id: uuid(),
      name: 'Nelson Inc',
      net_lease_price: 20000,
      residual_value: 5000,
      lease_rate_annual: 0.04,
      gst: 0.05,
      pst: 0.06,
      term_months: 48,
      start_date: '2016-10-22',
      payment_frequency: 'WEEKLY',
      lease_type: 'NEW'
    }
  ]
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_LEASES:
      return {
        ...state
      };
    case DELETE_LEASE:
      return {
        ...state,
        leases: state.leases.filter(lease => lease._id !== action.payload)
      };
      case ADD_LEASE:
        return {
          ...state,
          leases: [action.payload, ...state.leases]
        };
    default:
      return state;
  }
}
