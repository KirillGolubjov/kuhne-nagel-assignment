import { configureStore } from '@reduxjs/toolkit';
import deleteSlice from './features/deleteSlice';
import formSlice from './features/formSlice';

export const store = configureStore({
  reducer: {
    modal: formSlice,
    data: deleteSlice,
  },
});
