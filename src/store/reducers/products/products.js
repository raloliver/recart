import { createSlice } from '@reduxjs/toolkit';

import { MOCKED_PRODUCTS } from './productsData';

const name = 'products';
const initialState = MOCKED_PRODUCTS;

const productsSlice = createSlice({
  name,
  initialState,
});

export const productsReducer = productsSlice.reducer;
