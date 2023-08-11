import { createSlice } from '@reduxjs/toolkit';

import { MOCKED_CATEGORIES } from './categoriesData';

const name = 'categories';
const initialState = MOCKED_CATEGORIES;

const categoriesSlice = createSlice({
  name,
  initialState,
});

export const categoriesReducer = categoriesSlice.reducer;
