import MainLayout from '@/components/Layouts/MainLayout';
import SingleProduct from '@/components/Products/SingleProduct';
import { useGetProductQuery } from '@/redux/api/apiSlice';
import { useRouter } from 'next/router';
import React from 'react';

const ProductDetails = () => {
  const router = useRouter();
  const {data, isLoading, isError, error} = useGetProductQuery(router.query.productId);
  const product = data?.data

  let content = null;
  if (isLoading) content = <h1>Loading...</h1>
  if (!isLoading && isError) content = <h1>There is an error</h1>;
  if (!isLoading && !isError && product?.length !== 0) { content = <SingleProduct product={product}></SingleProduct> }

  return (
    <div>
    {content}
    </div>
  );
};

export default ProductDetails;

ProductDetails.getLayout = function getLayout(page){
  return <MainLayout>{page}</MainLayout>
}