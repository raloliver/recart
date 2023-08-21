const { createSlice } = require('@reduxjs/toolkit');

const initialState = '';

const name = 'search';
const reducers = {
  updateSearch: (state, { payload }) => payload,
  resetSearch: () => initialState,
};

const searchSlice = createSlice({
  name,
  initialState,
  reducers,
});

export const searchActions = searchSlice.actions;
export const searchReducer = searchSlice.reducer;
