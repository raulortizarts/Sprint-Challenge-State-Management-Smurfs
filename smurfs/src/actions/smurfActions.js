import {
    GET_SMURFS,
    ADD_SMURF,
    DELETE_SMURF,
    SET_LOADING,
    SMURFS_ERROR
  } from './types';

  export const getSmurfs = () => async dispatch => {
    try {
      setLoading();
  
      const res = await fetch('/smurfs');
      const data = await res.json();
  
      dispatch({
        type: GET_SMURFS,
        payload: data
      });
    } catch (err) {
      dispatch({
        type: SMURFS_ERROR,
        payload: err.response.statusText
      });
    }
  };
  

  export const addSmurf = smurf => async dispatch => {
    try {
      setLoading();
  
      const res = await fetch('/smurfs', {
        method: 'POST',
        body: JSON.stringify(smurf),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const data = await res.json();
  
      dispatch({
        type: ADD_SMURF,
        payload: data
      });
    } catch (err) {
      dispatch({
        type: SMURFS_ERROR,
        payload: err.response.statusText
      });
    }
  };
  
  export const deleteSmurf = id => async dispatch => {
    try {
      setLoading();
  
      await fetch(`/smurfs/${id}`, {
        method: 'DELETE'
      });
  
      dispatch({
        type: DELETE_SMURF,
        payload: id
      });
    } catch (err) {
      dispatch({
        type: SMURFS_ERROR,
        payload: err.response.statusText
      });
    }
  };
  
  export const setLoading = () => {
    return {
      type: SET_LOADING
    };
  };