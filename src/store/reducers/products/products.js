import { createSlice } from '@reduxjs/toolkit';

const name = 'products';
const initialState = [];

const productsSlice = createSlice({
  name,
  initialState,
});

export const productsReducer = productsSlice.reducer;
