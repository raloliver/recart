import { configureStore } from '@reduxjs/toolkit';

import { categoriesReducer } from './reducers/categories/categories';
import { productsReducer } from './reducers/products/products';
import { cartReducer } from './reducers/cart/cart';

const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    products: productsReducer,
    cart: cartReducer,
  },
});

export default store;
