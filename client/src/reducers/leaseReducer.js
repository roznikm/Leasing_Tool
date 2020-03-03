import { v4 as uuid } from 'uuid';
import {
  GET_LEASES,
  GET_LEASE,
  ADD_LEASE,
  EDIT_LEASE,
  DELETE_LEASE,
  LEASES_LOADING
} from '../actions/types';

const initialState = {
  leases: [],
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_LEASES:
      return {
        ...state,
        leases: action.payload,
        loading: false
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
    case LEASES_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
}
