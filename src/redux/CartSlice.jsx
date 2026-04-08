import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: []
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // ✅ Add item vào cart
    addItem: (state, action) => {
      const existingItem = state.cartItems.find(
        item => item.id === action.payload.id
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cartItems.push({
          ...action.payload,
          quantity: 1
        });
      }
    },

    // ✅ Xoá item khỏi cart
    removeItem: (state, action) => {
      state.cartItems = state.cartItems.filter(
        item => item.id !== action.payload
      );
    },

    // ✅ Update số lượng (QUAN TRỌNG)
    updateQuantity: (state, action) => {
      const { id, amount } = action.payload;

      const item = state.cartItems.find(i => i.id === id);

      if (item) {
        item.quantity += amount;

        if (item.quantity <= 0) {
          state.cartItems = state.cartItems.filter(
            i => i.id !== id
          );
        }
      }
    }
  }
});

export const { addItem, removeItem, updateQuantity } = cartSlice.actions;

export default cartSlice.reducer;
