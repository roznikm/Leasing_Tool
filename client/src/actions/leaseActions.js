import {
  GET_LEASES,
  GET_LEASE,
  ADD_LEASE,
  EDIT_LEASE,
  DELETE_LEASE
} from './types';

export const getLeases = () => {
  return {
    type: GET_LEASES
  };
};

export const deleteLease = id => {
  return {
    type: DELETE_LEASE,
    payload: id
  };
};

export const addLease = lease => {
    return {
      type: ADD_LEASE,
      payload: lease
    };
  };