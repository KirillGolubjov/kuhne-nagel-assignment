import { createSlice } from '@reduxjs/toolkit';

const formSlice = createSlice({
  name: 'modal',
  initialState: { isModalOpen: false },
  reducers: {
    toggleModalWindow: (state) => {
      state.isModalOpen = !state.isModalOpen;
    },
  },
});

export const { toggleModalWindow } = formSlice.actions;

export default formSlice.reducer;
