import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  visible: false,
  loading: undefined,
  error: undefined,
  totalAmmount: 0.0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add_to_cart: (state, action) => {
      const { id, title, description, image, numberInStock, price, qty } =
        action.payload;
      // check if already exist
      const existingItemIndex = state.data.findIndex(
        (oldItem) => oldItem.id === id
      );
      if (existingItemIndex === -1)
        state.data.push({
          id,
          title,
          description,
          image,
          numberInStock,
          price,
          qty,
        });
      else state.data[existingItemIndex].qty += qty;

      cartSlice.caseReducers.refreshTotalAmmount(state, action);
    },
    remove_from_cart: (state, action) => {
      const { id } = action.payload;
      const itemIndex = state.data.findIndex((item) => item.id === id);
      if (itemIndex !== -1) {
        if (state.data[itemIndex].qty <= 1) state.data.splice(itemIndex, 1);
        else state.data[itemIndex].qty--;
      }
      cartSlice.caseReducers.refreshTotalAmmount(state, action);
    },
    reset_cart: (state, action) => {
      state.data = initialState.data;
      cartSlice.caseReducers.refreshTotalAmmount(state, action);
    },
    showCart: (state) => {
      state.visible = true;
    },
    hideCart: (state) => {
      state.visible = false;
    },
    refreshTotalAmmount: (state) => {
      state.totalAmmount = state.data.reduce(
        (acc, item) => acc + item.qty * item.price,
        0
      );
    },
  },
});
export const { add_to_cart, remove_from_cart, reset_cart, showCart, hideCart } =
  cartSlice.actions;

export const selectCart = (state) => state.cart.data;
export const selectCartTotalAmount = (state) => state.cart.totalAmmount;
export const selectCartvisiblity = (state) => state.cart.visible;
export const selectCartLoading = (state) => state.cart.loading;
export const selectCartError = (state) => state.cart.error;

export default cartSlice.reducer;
