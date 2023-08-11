import { configureStore } from '@reduxjs/toolkit';

import { categoriesReducer } from './reducers/categories/categories';
import { productsReducer } from './reducers/products/products';

const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    products: productsReducer,
  },
});

export default store;
