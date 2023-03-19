import { createSlice } from '@reduxjs/toolkit';

const deleteSlice = createSlice({
  name: 'data',
  initialState: [],
  reducers: {
    setData: (state, action) => {
      return action.payload;
    },
    deleteRow: (state, action) => {
      state.splice(action.payload, 1);
    },
  },
});

export const { deleteRow, setData } = deleteSlice.actions;

export default deleteSlice.reducer;
