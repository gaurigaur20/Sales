import {USER_DATA, VERIFY_OTP} from './actionTypes';

export const userLoginData = (data = {}, action) => {
  switch (action.type) {
    case VERIFY_OTP:
      return action.payload;
    default:
      return data;
  }
};
