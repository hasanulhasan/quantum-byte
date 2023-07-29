import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:9000' }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => `/products`,
    }),
    getProduct: builder.query({
      query: (id) => `/products/${id}`,
    }),
  }),
})

export const { useGetProductsQuery,useGetProductQuery } = apiSlice