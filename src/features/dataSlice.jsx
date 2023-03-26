import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  data: [],
  dataPerPage: 10,
  currentPage: 1,
  selectedRow: null,
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
    setSelectedRow: (state, action) => {
      state.selectedRow = action.payload;
    },
    onNavigateNext: (state) => {
      state.currentPage++;
    },
    onNavigatePrev: (state) => {
      state.currentPage--;
    },
    onChangePerPage: (state, action) => {
      state.dataPerPage = action.payload;
    },
    onClickCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },

    deleteRow: (state, action) => {
      state.data.splice(action.payload, 1);
    },
    updateData: (state, action) => {
      const { index, updatedRow } = action.payload;
      state.data[index] = updatedRow;
    },
  },
});

export const {
  setData,
  setSelectedRow,
  deleteRow,
  updateData,
  onNavigateNext,
  onNavigatePrev,
  onClickCurrentPage,
} = dataSlice.actions;

export default dataSlice.reducer;
