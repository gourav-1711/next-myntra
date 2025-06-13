import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './features/counter/counter'
import cartReducer from './features/cart/cart'

export const store = configureStore({
  reducer: {
    counter:counterReducer,
    cart:cartReducer,
  },
})