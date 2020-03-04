import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
import axios from 'axios';

// Initial state
const initialState = {
  leases: [],
  selected_id: '',
  error: null,
  loading: true
};

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  async function getLeases() {
    try {
      const res = await axios.get('/leases');

      dispatch({
        type: 'GET_LEASES',
        payload: res.data.leases
      });
    } catch (error) {
      dispatch({
        type: 'LEASE_ERROR',
        payload: error.response.data.error
      });
    }
  }

  async function deleteLease(id) {
    try {
      await axios.delete(`/leases/${id}`);
      dispatch({
        type: 'DELETE_LEASE',
        payload: id
      });
    } catch (error) {
      dispatch({
        type: 'LEASE_ERROR',
        payload: error.response.data.error
      });
    }
  }

  function selectId(id) {
    dispatch({
      type: 'SELECT_ID',
      payload: id
    });
  }

  function addLease(item) {
    dispatch({
      type: 'ADD_LEASE',
      payload: item
    });
  }
  return (
    <GlobalContext.Provider
      value={{
        leases: state.leases,
        error: state.error,
        selected_id: state.selected_id,
        getLeases,
        deleteLease,
        selectId,
        addLease
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
