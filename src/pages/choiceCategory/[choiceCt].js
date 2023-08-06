import ChoiceCategoryProducts from '@/components/ChoiceCategory/ChoiceCategoryProducts';
import MainLayout from '@/components/Layouts/MainLayout';
import { useGetCategoryProductsQuery } from '@/redux/api/apiSlice';
import { Box, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import React from 'react';

const ChoiceCategory = () => {
  const router = useRouter();
  const {data, isLoading, isError} = useGetCategoryProductsQuery(router.query.choiceCt);
  const products = data?.data

  let content = null;
  if (isLoading) content = <h1>Loading...</h1>
  if (!isLoading && isError) content = <h1>There is an error</h1>;
  if (!isLoading && !isError && products?.length === 0) { content = <h1>There is no product</h1> }
  if (!isLoading && !isError && products?.length > 0) { content = <ChoiceCategoryProducts products={products}></ChoiceCategoryProducts> }

  return (
    <div>
      <Box
        sx={{
          backgroundImage: `url(https://fixpointqatar.com/img/accessories_banner.jpg)`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          height: "250px",
        }}
      >
        <Typography
          align="center"
          color={"#FF5733"}
          variant="h2"
          sx={{ fontWeight: 900, padding: 10 }}
        >
          {router.query.choiceCt} Collection
        </Typography>
      </Box>
      {
        content
      }
    </div>
  );
};

export default ChoiceCategory;

ChoiceCategory.getLayout = function getLayout(page){
  return <MainLayout>{page}</MainLayout>
}