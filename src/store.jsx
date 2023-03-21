import { configureStore } from '@reduxjs/toolkit';
import dataSlice from './features/dataSlice';
import formSlice from './features/formSlice';

export const store = configureStore({
  reducer: {
    modal: formSlice,
    data: dataSlice,
  },
});
