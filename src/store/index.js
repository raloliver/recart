import { configureStore } from '@reduxjs/toolkit';

import { categoriesReducer } from './reducers/categories/categories';

const store = configureStore({
  reducer: {
    categories: categoriesReducer,
  },
});

export default store;
