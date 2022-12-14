import {configureStore} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './rootReducer';

import {loginSaga} from './loginSaga';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {rootReducer},
  middleware: () => [sagaMiddleware],
});

sagaMiddleware.run(loginSaga);
export default store;
