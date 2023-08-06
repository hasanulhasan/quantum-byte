import CategoryProducts from '@/components/Category/CategoryProducts';
import MainLayout from '@/components/Layouts/MainLayout';
import { useGetCategoryProductsQuery } from '@/redux/api/apiSlice';
import { Box, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import React from 'react';

const CategoryPage = ({products}) => {
  const router = useRouter();
  let content = null;
  if (products?.length === 0) { content = <h1>There is no product</h1> }
  if (products?.length > 0) { content = <CategoryProducts products={products}></CategoryProducts> }

  return (
    <div>
      <Box sx={{
          backgroundImage: `url(https://fixpointqatar.com/img/accessories_banner.jpg)`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          height: "250px",
        }}
      >
        <Typography
          align="center"
          color={"#E74C3C"}
          variant="h2"
          sx={{  fontWeight: 900, pt: 5}}
        >
          {router.query.categoryName}
        </Typography>
      </Box>
      {
        content
      }
    </div>
  );
};

export default CategoryPage;

CategoryPage.getLayout = function getLayout(page){
  return <MainLayout>{page}</MainLayout>
}

export const getStaticPaths = async () => {
  const res = await fetch('http://localhost:9000/v1/products')
  const {data: products} = await res.json();

  const paths = products.map(product=> ({
    params: {categoryName: product.category}
  }))
  return {paths, fallback: false}
}

export const getStaticProps = async (context)=> {
  const {params} = context;
  const res = await fetch(`http://localhost:9000/v1/products/category/${params.categoryName}`)
  const data = await res.json();
  // console.log(data)
  return {
    props: {
      products: data?.data,
    }
  }
}