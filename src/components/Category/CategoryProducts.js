import { Box } from '@mui/material';
import React from 'react';
import ProductCard from '../Products/ProductCard';
import { useSelector } from 'react-redux';

const CategoryProducts = ({products}) => {
  const { search, sort } = useSelector(state => state.filter)
  
  return (
    <Box sx={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
        {
          products?.filter(product => product.name.toLowerCase().includes(search.toLowerCase()))
          .sort((a, b) => {
            if (sort === 'asc') { return (Number(a.price) - Number(b.price)) }
            else if (sort === 'dec') { return (Number(b.price) - Number(a.price)) }
            else { return null }
          })
          .map(product => <ProductCard key={product._id} product={product}></ProductCard>)
        }
    </Box>
  );
};

export default CategoryProducts;