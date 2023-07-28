import { useRouter } from 'next/router';
import React from 'react';

const NotFoundPage = () => {
  const router = useRouter();

    setTimeout(()=>{
        router.push("/")
    },2000)
    
  return (
    <div>
      <h1>Your are in wrong Route</h1>
    </div>
  );
};

export default NotFoundPage;