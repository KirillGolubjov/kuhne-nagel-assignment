import { createSlice } from '@reduxjs/toolkit';

const deleteSlice = createSlice({
  name: 'data',
  initialState: [],
  reducers: {
    setData: (state, action) => {
      return action.payload;
    },
    deleteRow: (state, action) => {
      const index = action.payload;

      state.splice(index, 1);
    },
    updateData: (state, action) => {
      return [...state, action.payload];
    },
  },
});

export const { deleteRow, setData, updateData } = deleteSlice.actions;

export default deleteSlice.reducer;
