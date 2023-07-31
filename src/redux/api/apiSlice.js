import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:9000/v1' }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => `/products`,
    }),
    getProduct: builder.query({
      query: (id) => `/products/${id}`,
    }),
    getCategoryProducts: builder.query({
      query: (category) => `/products/category/${category}`,
    }),
  }),
})

export const { useGetProductsQuery,useGetProductQuery,useGetCategoryProductsQuery } = apiSlice