import { createSlice } from '@reduxjs/toolkit';

const formSlice = createSlice({
  name: 'modal',
  initialState: { isModalOpen: false },
  reducers: {
    toggleModal: (state) => {
      state.isModalOpen = !state.isModalOpen;
    },
  },
});

export const { toggleModal } = formSlice.actions;

export default formSlice.reducer;
