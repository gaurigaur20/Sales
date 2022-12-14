import {put, takeLatest} from 'redux-saga/effects';

function* verifyOtpSaga(_data) {
  console.log('_data', _data);
}

export function* loginSaga() {
//   yield takeLatest(VERIFY_OTP, verifyOtpSaga);
}
