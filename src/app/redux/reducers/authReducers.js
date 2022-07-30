import * as actionTypes from "../actionTypes.js";

const initialState = {
  isAuthenticated: true,
  userData: null,
  accessToken: null,
};

const authReducers = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOG_IN:
      return { ...state, userData: action.payload, isAuthenticated: false };
    case actionTypes.TOKEN_FETCH:
      return { ...state, isAuthenticated: true };
    case actionTypes.REFRESH_TOKEN:
      return { ...state, isAuthenticated: true };
    case actionTypes.LOG_OUT:
      return initialState;
    default:
      return state;
  }
};

export default authReducers;
