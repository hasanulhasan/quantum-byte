import { configureStore } from '@reduxjs/toolkit'
import { apiSlice } from './api/apiSlice'
import productChoiceReducer from './api/productChoiceSlice'

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    productChoice: productChoiceReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
})