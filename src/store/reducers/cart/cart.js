const { createSlice } = require('@reduxjs/toolkit');

const initialState = [];

const name = 'cart';
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
  updateQuantity: (state, { payload }) => {
    state = state.map((productOnCart) => {
      if (productOnCart.guid === payload.guid) {
        productOnCart.quantity += payload.quantity;
      }

      return productOnCart;
    });
  },
  resetCart: () => initialState,
};

const cartSlice = createSlice({
  name,
  initialState,
  reducers,
});

export const cartActions = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
