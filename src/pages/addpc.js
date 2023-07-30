import MainLayout from '@/components/Layouts/MainLayout';
import React from 'react';

const AddPc = () => {
  return (
    <div>
      <h1>ADD pc page</h1>
    </div>
  );
};

export default AddPc;

AddPc.getLayout = function getLayout(page){
  return <MainLayout>{page}</MainLayout>
}