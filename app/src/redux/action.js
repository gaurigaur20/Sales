import {
  VERIFY_OTP,
  GET_LOADER,
  GET_ENQUIRY,
  GET_PROSPECT,
  GET_AVAILABLE_STOCK,
  USER_DATA,
} from './actionTypes';

export const verifyOtpAction = data => {
  return {
    type: VERIFY_OTP,
    payload: data,
  };
};

export const getLoaderAction = data => {
  return {
    type: GET_LOADER,
    data,
  };
};
export const getProspectAction = data => {
  return {
    type: GET_PROSPECT,
    payload: data,
  };
};
export const getAvailableStockAction = data => {
  return {
    type: GET_AVAILABLE_STOCK,
    payload: data,
  };
};
export const getEnquiryAction = data => {
  return {
    type: GET_ENQUIRY,
    payload: data,
  };
};
export const getUserData = data => {
  return {
    type: USER_DATA,
    payload: data,
  };
};
