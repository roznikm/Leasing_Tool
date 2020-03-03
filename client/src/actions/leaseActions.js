import axios from 'axios';
import {
  GET_LEASES,
  GET_LEASE,
  ADD_LEASE,
  EDIT_LEASE,
  DELETE_LEASE,
  LEASES_LOADING
} from './types';

export const getLeases = () => dispatch => {
  dispatch(setLeasesLoading());
  axios.get('http://localhost:7000/leases').then(res =>
    dispatch({
      type: GET_LEASES,
      payload: res.data
    })
  );
};

export const addLease = lease => dispatch => {
    axios
        .post('http://localhost:7000/leases', lease)
        .then(res => 
            dispatch({
                type: ADD_LEASE,
                payload: res.data
            }))
  };

export const deleteLease = id => dispatch => {
    axios.delete(`http://localhost:7000/leases/${id}`).then(res => 
    dispatch({
        type: DELETE_LEASE,
        payload: id
    }))
};


export const setLeasesLoading = () => {
  return {
    type: LEASES_LOADING
  };
};
