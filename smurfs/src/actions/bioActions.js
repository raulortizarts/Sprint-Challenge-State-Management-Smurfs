import {
    GET_BIO,
    SET_LOADING,
    BIO_ERROR,
    ADD_BIO,
    DELETE_BIO,
    UPDATE_BIO,
    SEARCH_BIO,
    SET_CURRENT,
    CLEAR_CURRENT
  } from './types';
  
 
  export const getBio = () => async dispatch => {
    try {
      setLoading();
  
      const res = await fetch('/bio');
      const data = await res.json();
  
      dispatch({
        type: GET_BIO,
        payload: data
      });
    } catch (err) {
      dispatch({
        type: BIO_ERROR,
        //payload: err.response.statusText
      });
    }
  };
  

  export const addBio = bio => async dispatch => {
    try {
      setLoading();
  
      const res = await fetch('/bio', {
        method: 'POST',
        body: JSON.stringify(bio),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const data = await res.json();
  
      dispatch({
        type: ADD_BIO,
        payload: data
      });
    } catch (err) {
      dispatch({
        type: BIO_ERROR,
        //payload: err.response.statusText
      });
    }
  };
  

  export const deleteBio = id => async dispatch => {
    try {
      setLoading();
  
      await fetch(`/bio/${id}`, {
        method: 'DELETE'
      });
  
      dispatch({
        type: DELETE_BIO,
        payload: id
      });
    } catch (err) {
      dispatch({
        type: BIO_ERROR,
       // payload: err.response.statusText
      });
    }
  };

  export const updateBio = bio => async dispatch => {
    try {
      setLoading();
  
      const res = await fetch(`/bio/${bio.id}`, {
        method: 'PUT',
        body: JSON.stringify(bio),
        headers: {
          'Content-Type': 'application/json'
        }
      });
  
      const data = await res.json();
  
      dispatch({
        type: UPDATE_BIO,
        payload: data
      });
    } catch (err) {
      dispatch({
        type: BIO_ERROR,
        payload: err.response.statusText
      });
    }
  };
  

  export const searchBio = text => async dispatch => {
    try {
      setLoading();
  
      const res = await fetch(`/bio?q=${text}`);
      const data = await res.json();
  
      dispatch({
        type: SEARCH_BIO,
        payload: data
      });
    } catch (err) {
      dispatch({
        type: BIO_ERROR,
        payload: err.response.statusText
      });
    }
  };
  

  export const setCurrent = bio => {
    return {
      type: SET_CURRENT,
      payload: bio
    };
  };
  

  export const clearCurrent = () => {
    return {
      type: CLEAR_CURRENT
    };
  };
  
  export const setLoading = () => {
    return {
      type: SET_LOADING
    };
  };