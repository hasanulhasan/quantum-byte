import { configureStore } from '@reduxjs/toolkit'
import { apiSlice } from './api/apiSlice'
import productChoiceReducer from './api/productChoiceSlice'
import filterReducer from './api/filterSlice'

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    productChoice: productChoiceReducer,
    filter: filterReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
})