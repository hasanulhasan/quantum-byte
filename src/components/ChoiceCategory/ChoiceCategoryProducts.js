import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import SingleChoiceProduct from './SingleChoiceProduct';

import styles from '../../styles/addpc.module.css'

const ChoiceCategoryProducts = ({products}) => {

  return (
    <div className={styles.table}>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Product Name</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Rating</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
        
            products.map(product=> <SingleChoiceProduct key={product._id} product={product}></SingleChoiceProduct>)
          }
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
};

export default ChoiceCategoryProducts;