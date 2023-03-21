import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
    deleteRow: (state, action) => {
      state.splice(action.payload, 1);
    },
    updateData: (state, action) => {
      const { index, updatedRow } = action.payload;
      state.data[index] = updatedRow;
    },
  },
});

export const { deleteRow, setData, updateData } = dataSlice.actions;

export default dataSlice.reducer;
