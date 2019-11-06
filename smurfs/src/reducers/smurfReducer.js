import {
  GET_SMURFS,
  ADD_SMURF,
  DELETE_SMURF,
  SET_LOADING,
  SMURFS_ERROR
} from '../actions/types';

const initialState = {
  smurfs: null,
  loading: false,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_SMURFS:
      return {
        ...state,
        smurfs: action.payload,
        loading: false
      };
    case ADD_SMURF:
      return {
        ...state,
        smurfs: [...state.smurfs, action.payload],
        loading: false
      };
    case DELETE_SMURF:
      return {
        ...state,
        smurfs: state.smurfs.filter(smurf => smurf.id !== action.payload),
        loading: false
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    case SMURFS_ERROR:
      console.error(action.payload);
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    default:
      return state;
  }
};
