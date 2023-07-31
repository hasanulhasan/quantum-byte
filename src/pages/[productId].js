import MainLayout from '@/components/Layouts/MainLayout';
import SingleProduct from '@/components/Products/SingleProduct';
// import { useGetProductQuery } from '@/redux/api/apiSlice';
// import { useRouter } from 'next/router';
import React from 'react';

const ProductDetails = ({product}) => {
  // const router = useRouter();
  // const {data, isLoading, isError} = useGetProductQuery(router.query.productId);
  // const product = data?.data

  let content = null;
  // if (isLoading) content = <h1>Loading...</h1>
  // if (!isLoading && isError) content = <h1>There is an error</h1>;
  // if (!isLoading && !isError && product?.length !== 0) { content = <SingleProduct product={product}></SingleProduct> }

  if (product?.length !== 0) { content = <SingleProduct product={product}></SingleProduct> }
  else{
    content = <h1>There is no Product</h1>;
  }

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

export const getStaticPaths = async () => {
  const res = await fetch('http://localhost:9000/v1/products')
  const {data: products} = await res.json();

  const paths = products.map(product=> ({
    params: {productId: product._id}
  }))
  return {paths, fallback: false}
}

export const getStaticProps = async (context)=> {
  const {params} = context;
  const res = await fetch(`http://localhost:9000/v1/products/${params.productId}`)
  const {data} = await res.json();
  return {
    props: {
      product: data
    }
  }
}