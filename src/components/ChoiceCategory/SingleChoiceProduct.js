import { addProduct } from '@/redux/api/productChoiceSlice';
import numberWithCommas from '@/utils/thousandSeparate';
import { Avatar, Button, TableCell, TableRow, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import React from 'react';
import { useDispatch} from 'react-redux';

const SingleChoiceProduct = ({product}) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const {_id,name, price, img, rating,status,category} = product;

  const handleAddToChoice = ()=> {
    dispatch(addProduct(product))
    router.push('/addpc')
  }

  return (
    <TableRow>
              <TableCell> <Avatar
  alt="products"
  src={img}
  sx={{ width: 56, height: 56 }}
/> </TableCell>
              <TableCell component="th" scope="row">
                {name}
              </TableCell>
              <TableCell>{numberWithCommas(price)}&#2547;</TableCell>
              <TableCell>{rating}</TableCell>
              <TableCell>{
              status? 
                <Typography color='green'>
                In Stock
              </Typography>
                : 
                <Typography color='red'>
                Out of Stock
              </Typography>
                
              }</TableCell>
              <TableCell>{category}</TableCell>
              <TableCell>
              <Button onClick={handleAddToChoice} variant='contained' disabled={!status}>ADD</Button>
              </TableCell>
  </TableRow>
  );
};

export default SingleChoiceProduct;