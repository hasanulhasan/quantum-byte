import MainLayout from '@/components/Layouts/MainLayout';
import React from 'react';

const Contact = () => {
  return (
    <div>
      <h1>This is contact</h1>
    </div>
  );
};

export default Contact;

Contact.getLayout = function getLayout(page){
  return <MainLayout>{page}</MainLayout>
}