import { Button, TableCell, TableRow } from '@mui/material';
import React from 'react';

const SingleChoiceProduct = ({product}) => {
  const {_id,name, img, price, rating, category, status, features, description, reviews} = product;
  return (
    <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {name}
              </TableCell>
              <TableCell>${price}</TableCell>
              <TableCell>{rating}</TableCell>
              <TableCell>{
              status? 'In Stock': 'Our of Stock'
              }</TableCell>
              <TableCell>
              <Button variant='contained' disabled={status}>ADD</Button>
              </TableCell>
  </TableRow>
  );
};

export default SingleChoiceProduct;