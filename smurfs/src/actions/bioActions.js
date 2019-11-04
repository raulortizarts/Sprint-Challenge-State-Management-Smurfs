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

// export const getbio = () => {
//   return async dispatch => {
//     setLoading();

//     const res = await fetch('/bio');
//     const data = await res.json();

//     dispatch({
//       type: GET_BIO,
//       payload: data
//     });
//   };
// };

// Get bio from server
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
      payload: err.response.statusText
    });
  }
};

// Add new Bio
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
      payload: err.response.statusText
    });
  }
};

// Delete Bio from server
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
      payload: err.response.statusText
    });
  }
};

// Update Bio on server
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

// Search server Bio
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

// Set current Bio
export const setCurrent = bio => {
  return {
    type: SET_CURRENT,
    payload: bio
  };
};

// Clear current bio
export const clearCurrent = () => {
  return {
    type: CLEAR_CURRENT
  };
};

// Set loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING
  };
};
