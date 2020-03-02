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
