import MainLayout from '@/components/Layouts/MainLayout';
import React from 'react';

const About = () => {
  return (
    <div>
      <h1>This is about</h1>
    </div>
  );
};

export default About;

About.getLayout = function getLayout(page){
  return <MainLayout>{page}</MainLayout>
}