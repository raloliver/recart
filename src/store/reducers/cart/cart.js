const { createSlice } = require('@reduxjs/toolkit');

const initialState = [];

const reducers = {
  updateCart: (state, { payload }) => {
    const isNotEmpty = state.some((product) => product.guid === payload);

    if (!isNotEmpty) {
      return [
        ...state,
        {
          guid: payload,
          quantity: 1,
        },
      ];
    }

    return state.filter((product) => product.guid !== payload);
  },
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers,
});

export const cartActions = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
