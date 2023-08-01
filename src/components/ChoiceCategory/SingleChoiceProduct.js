import { addProduct } from '@/redux/api/productChoiceSlice';
import { Button, TableCell, TableRow } from '@mui/material';
import { useRouter } from 'next/router';
import React from 'react';
import { useDispatch} from 'react-redux';

const SingleChoiceProduct = ({product}) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const {_id,name, img, price, rating, category, status, features, description, reviews} = product;

  const handleAddToChoice = ()=> {
    dispatch(addProduct(product))
      router.push('/addpc')
  }

  return (
    <TableRow>
              <TableCell component="th" scope="row">
                {name}
              </TableCell>
              <TableCell>${price}</TableCell>
              <TableCell>{rating}</TableCell>
              <TableCell>{
              status? 'In Stock': 'Out of Stock'
              }</TableCell>
              <TableCell>
              <Button onClick={handleAddToChoice} variant='contained' disabled={!status}>ADD</Button>
              </TableCell>
  </TableRow>
  );
};

export default SingleChoiceProduct;