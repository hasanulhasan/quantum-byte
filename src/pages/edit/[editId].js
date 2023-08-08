import MainLayout from '@/components/Layouts/MainLayout';
import EditProduct from '@/components/Products/EditProduct';
import { useGetProductQuery } from '@/redux/api/apiSlice';
import { LinearProgress, Stack } from '@mui/material';
import { useRouter } from 'next/router';
import React from 'react';

const Edit = () => {
  const router = useRouter();
  const {data, isLoading, isError} = useGetProductQuery(router.query.editId)
  const product = data?.data

  let content = null;
  if (isLoading) content = <Stack sx={{ width: '100%', color: 'grey.500'}}>
  <LinearProgress color="success" />
</Stack>
  if (!isLoading && isError) content = <h1> There is an error </h1>;
  if (!isLoading && !isError && product?.length === 0) { content = <h5>There is no Product</h5> }
  if (!isLoading && !isError && product?.length !== 0) { content = <EditProduct key={product._id} product={product}></EditProduct> }
  
  return (
    <div>
      {
        content
      }
    </div>
  );
};

export default Edit;

Edit.getLayout = function getLayout(page){
  return <MainLayout>{page}</MainLayout>
}