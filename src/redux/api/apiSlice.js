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
    addProduct: builder.mutation({
      query: (data) => ({
        url: '/products/create-product',
        method: 'POST',
        body: data
      }),
    }),
    getCategoryProducts: builder.query({
      query: (category) => `/products/category/${category}`,
    }),
  }),
})

export const { useGetProductsQuery,useGetProductQuery,useGetCategoryProductsQuery, useAddProductMutation} = apiSlice