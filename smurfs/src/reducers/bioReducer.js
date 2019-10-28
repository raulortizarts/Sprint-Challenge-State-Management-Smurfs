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
  } from '../actions/types';
  
  const initialState = {
    bio: null,
    current: null,
    loading: false,
    error: null
  };
  
  export default (state = initialState, action) => {
    switch (action.type) {
      case GET_BIO:
        return {
          ...state,
          bio: action.payload,
          loading: false
        };
      case ADD_BIO:
        return {
          ...state,
          bio: [...state.bio, action.payload],
          loading: false
        };
      case DELETE_BIO:
        return {
          ...state,
          bio: state.bio.filter(bio => bio.id !== action.payload),
          loading: false
        };
      case UPDATE_BIO:
        return {
          ...state,
          bio: state.bio.map(bio =>
            bio.id === action.payload.id ? action.payload : bio
          )
        };
      case SEARCH_BIO:
        return {
          ...state,
          BIO: action.payload
        };
      case SET_CURRENT:
        return {
          ...state,
          current: action.payload
        };
      case CLEAR_CURRENT:
        return {
          ...state,
          current: null
        };
      case SET_LOADING:
        return {
          ...state,
          loading: true
        };
      case BIO_ERROR:
        console.error(action.payload);
        return {
          ...state,
          error: action.payload
        };
      default:
        return state;
    }
  };