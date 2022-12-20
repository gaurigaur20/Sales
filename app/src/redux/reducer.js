import {USER_DATA, VERIFY_OTP, GET_LOADER} from './actionTypes';

export const userLoginData = (data = {}, action) => {
  switch (action.type) {
    case USER_DATA:
      return [action.data];
    default:
      return data;
  }
};

export const forLoader = (loader = false, action) => {
  switch (action.type) {
    case GET_LOADER:
      return action.data;
    default:
      return loader;
  }
};
