import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:9000/v1' }),
  tagTypes: ['Products','Product'],
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => `/products`,
      providesTags: ['Products'],
    }),
    getProduct: builder.query({
      query: (id) => `/products/${id}`,
      providesTags: ['Product'],
    }),
    addProduct: builder.mutation({
      query: (data) => ({
        url: '/products/create-product',
        method: 'POST',
        body: data
      }),
      invalidatesTags: ['Products']
    }),
    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `/products/${id}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['Products','Product'],
    }),
    editProduct: builder.mutation({
      query: ({id, data}) => ({
        url: `/products/${id}`,
        method: 'PATCH',
        body: data
      }),
      invalidatesTags: ['Products','Product'],
    }),
    getCategoryProducts: builder.query({
      query: (category) => `/products/category/${category}`,
    }),
  }),
})

export const { useGetProductsQuery,useGetProductQuery,useGetCategoryProductsQuery, useAddProductMutation, useDeleteProductMutation, useEditProductMutation} = apiSlice