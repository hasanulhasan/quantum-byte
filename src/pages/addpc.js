import MainLayout from '@/components/Layouts/MainLayout';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import styles from '../styles/addpc.module.css'
import { Button, TextField, Typography } from '@mui/material';

// function createData(name, calories) {
//   return { name, calories };
// }

// const rows = [
//   createData('Frozen yoghurt', 159),
//   createData('Ice cream sandwich', 237),
//   createData('Eclair', 262),
//   createData('Cupcake', 305),
//   createData('Gingerbread', 356),
// ];

const AddPc = () => {
  return (
    <div className={
      styles.table
    }>
      <TableContainer component={Paper}>
        <Typography variant='h1' my={3} sx={{textAlign: "center"}}>Build your PC</Typography>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center" colSpan={7}><Typography variant='h6' >Components</Typography></TableCell>
            <TableCell align="center"><Typography variant='h6' >Actions</Typography></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow>
              <TableCell align="center"  colSpan={7}>
                <TextField sx={{width: '100%'}}
          id="outlined-multiline-flexible"
          label="Motherboard"
        />
              </TableCell>
              <TableCell align="center"><Button variant='contained'>ADD</Button></TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center"  colSpan={7}>
                <TextField sx={{width: '100%'}}
          id="outlined-multiline-flexible"
          label="Processor"
        />
              </TableCell>
              <TableCell align="center"><Button variant='contained'>ADD</Button></TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center"  colSpan={7}>
                <TextField sx={{width: '100%'}}
          id="outlined-multiline-flexible"
          label="SSD"
        />
              </TableCell>
              <TableCell align="center"><Button variant='contained'>ADD</Button></TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center"  colSpan={7}>
                <TextField sx={{width: '100%'}}
          id="outlined-multiline-flexible"
          label="Monitor"
        />
              </TableCell>
              <TableCell align="center"><Button variant='contained'>ADD</Button></TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center"  colSpan={7}>
                <TextField sx={{width: '100%'}}
          id="outlined-multiline-flexible"
          label="PSU"
        />
              </TableCell>
              <TableCell align="center"><Button variant='contained'>ADD</Button></TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center"  colSpan={7}>
                <TextField sx={{width: '100%'}}
          id="outlined-multiline-flexible"
          label="RAM"
        />
              </TableCell>
              <TableCell align="center"><Button variant='contained'>ADD</Button></TableCell>
            </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
};

export default AddPc;

AddPc.getLayout = function getLayout(page){
  return <MainLayout>{page}</MainLayout>
}