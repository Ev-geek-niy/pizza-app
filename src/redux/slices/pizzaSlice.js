import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchPizzas = createAsyncThunk('pizza/fetchPizzas', async (params, thunkAPI) => {
  const { currentPage, category, sortBy, order, search } = params;
  const { data } = await axios.get(
    `https://62fdd187b9e38585cd57025e.mockapi.io/Pizzas?page=${currentPage}&limit=4${category}&sortBy=${sortBy}&order=${order}${search}`,
  );

  return data;
});

const initialState = {
  items: [],
  status: '',
};

const pizzaSlice = createSlice({
  name: 'pizza',
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
      state.items = [];
    },
  },
  extraReducers: {
    [fetchPizzas.pending]: (state) => {
      state.status = 'loading';
    },
    [fetchPizzas.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.status = 'success';
    },
    [fetchPizzas.rejected]: (state) => {
      state.status = 'error';
      state.items = [];
    },
  },
});

export const selectPizzaData = (state) => state.pizza;

export const { setItems } = pizzaSlice.actions;

export default pizzaSlice.reducer;
