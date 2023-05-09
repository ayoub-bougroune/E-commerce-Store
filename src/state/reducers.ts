import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface CartItem {
  id: number;
  name: string;
  attributes:
  {
    category: string;
    price: number;
    name: string;
    image:
    {
      data: {
        attributes: {
          formats: {
            medium: {
              url: string;
            };
          };
        };
      };
    };
  };
  count: number;
}

interface InitialState {
  isCartOpen: boolean;
  cart: CartItem[];
  items: CartItem[];
}

const initialState: InitialState = {
  isCartOpen: false,
  cart: [],
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setItems: (state, action: PayloadAction<CartItem[]>) => {
      state.items = action.payload;
    },
    addToCart: (state, action: PayloadAction<{ item: CartItem }>) => {
      state.cart = [...state.cart, action.payload.item];
    },
    removeFromCart: (state, action: PayloadAction<{ id: number }>) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
    },
    increaseCount: (state, action: PayloadAction<{ id: number }>) => {
      state.cart = state.cart.map((item) => {
        if (item.id === action.payload.id) {
          item.count++;
        }
        return item;
      });
    },
    decreaseCount: (state, action: PayloadAction<{ id: number }>) => {
      state.cart = state.cart.map((item) => {
        if (item.id === action.payload.id && item.count > 1) {
          item.count--;
        }
        return item;
      });
    },
    setIsCartOpen: (state) => {
      state.isCartOpen = !state.isCartOpen;
    },
  },
});

export const {
  setItems,
  addToCart,
  removeFromCart,
  increaseCount,
  decreaseCount,
  setIsCartOpen,
} = cartSlice.actions;

export default cartSlice.reducer;