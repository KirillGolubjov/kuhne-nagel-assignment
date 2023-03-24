import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import dataSlice from './features/dataSlice';
import formSlice from './features/formSlice';
import thunkMiddleware from 'redux-thunk';

export const store = configureStore(
  {
    reducer: {
      modal: formSlice,
      data: dataSlice,
    },
  },
  applyMiddleware(thunkMiddleware)
);
