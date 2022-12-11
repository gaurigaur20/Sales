import {USER_DATA} from './actionTypes';

export const userLoginData = (data = {}, action) => {
  switch (action.type) {
    case USER_DATA:
      return [action.data];
    default:
      return data;
  }
};
