import {VERIFY_OTP, GENERATE_OTP, USER_DATA} from './actionTypes';

// export const generateOtpAction = () => {
//   return {
//     type: GENERATE_OTP,
//   };
// };

export const verifyOtpAction = (data) => {
  return {
    type: VERIFY_OTP,
    payload: data
  };
};

// export const userLoginDataAction = () => {
//   return {
//     type: USER_DATA,
//   };
// };
