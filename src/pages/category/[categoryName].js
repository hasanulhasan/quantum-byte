import CategoryProducts from '@/components/Category/CategoryProducts';
import MainLayout from '@/components/Layouts/MainLayout';
import { useGetCategoryProductsQuery } from '@/redux/api/apiSlice';
import { Box, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import React from 'react';

const CategoryPage = () => {
  const router = useRouter();
  const {data, isLoading, isError, error} = useGetCategoryProductsQuery(router.query.categoryName);
  const products = data?.data
  console.log(products);

  let content = null;
  if (isLoading) content = <h1>Loading...</h1>
  if (!isLoading && isError) content = <h1>There is an error</h1>;
  if (!isLoading && !isError && products?.length === 0) { content = <h1>There is no product</h1> }
  if (!isLoading && !isError && products?.length > 0) { content = <CategoryProducts products={products}></CategoryProducts> }

  return (
    <div>
      <Box
        sx={{
          backgroundImage: `url(https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/42e89993546277.5ed6ae8979655.png)`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          height: "250px",
        }}
      >
        <Typography
          align="center"
          color={"black"}
          variant="h2"
          sx={{ fontWeight: 900, padding: 10 }}
        >
          choose your favorite {router.query.categoryName}
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