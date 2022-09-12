import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categoryId: 0,
  currentPage: 1,
  sort: {
    name: 'Популярное',
    sortProperty: 'rating',
  },
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setCategoryId(state, action) {
      state.categoryId = action.payload;
    },
    setSort(state, action) {
      state.sort = action.payload;
    },
    setCurrentCount(state, action) {
      state.pageCount = action.payload;
    },
  },
});

export const { setCategoryId, setSort, setCurrentCount } = filterSlice.actions;

export default filterSlice.reducer;
