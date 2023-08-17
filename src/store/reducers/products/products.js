import { createSlice } from '@reduxjs/toolkit';

import { MOCKED_PRODUCTS } from './productsData';

const name = 'products';
const initialState = MOCKED_PRODUCTS;

const reducers = {
  updateFavorite: (state, { payload }) => {
    state = state.map((product) => {
      if (product.guid === payload) {
        product.favorite = !product.favorite;
      }

      return product;
    });
  },
};

const productsSlice = createSlice({
  name,
  initialState,
  reducers,
});

export const productsActions = productsSlice.actions;
export const productsReducer = productsSlice.reducer;
