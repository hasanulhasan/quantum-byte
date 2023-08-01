import MainLayout from '@/components/Layouts/MainLayout';
import styles from '../styles/addpc.module.css'
import { Box, Button, Container, TextField, Typography } from '@mui/material';

const AddPc = () => {
  return (
    <div className={
      styles.table
    }>
      <Container>
        <Typography bgcolor='#dcdde1' variant='h4' py={3} my={2} sx={{textAlign: "center", fontWeight: 'bold',
            borderRadius: '10px'}}>Build your PC</Typography>
          <Box bgcolor='#dcdde1' sx={{
            padding: '10px', 
            borderRadius: '10px'}}>

          <Box  sx={{
            padding: '10px', 
            display: 'flex',
          }}><TextField sx={{width: '100%', marginRight: '10px'}}
          id="outlined-multiline-flexible"
          label="Motherboard"
        /><Button variant='contained'>ADD</Button></Box>

          <Box  sx={{
            padding: '10px', 
            display: 'flex',
          }}><TextField sx={{width: '100%', marginRight: '10px'}}
          id="outlined-multiline-flexible"
          label="Monitor"
        /><Button variant='contained'>ADD</Button></Box>
          <Box  sx={{
            padding: '10px', 
            display: 'flex',
          }}><TextField sx={{width: '100%', marginRight: '10px'}}
          id="outlined-multiline-flexible"
          label="Processor"
        /><Button variant='contained'>ADD</Button></Box>
          <Box  sx={{
            padding: '10px', 
            display: 'flex',
          }}><TextField sx={{width: '100%', marginRight: '10px'}}
          id="outlined-multiline-flexible"
          label="RAM"
        /><Button variant='contained'>ADD</Button></Box>
          <Box  sx={{
            padding: '10px', 
            display: 'flex',
          }}><TextField sx={{width: '100%', marginRight: '10px'}}
          id="outlined-multiline-flexible"
          label="SSD"
        /><Button variant='contained'>ADD</Button></Box>
          <Box  sx={{
            padding: '10px', 
            display: 'flex',
          }}><TextField sx={{width: '100%', marginRight: '10px'}}
          id="outlined-multiline-flexible"
          label="PSU"
        /><Button variant='contained'>ADD</Button></Box>

          <Box sx={{
            padding: '10px', 
            display: 'flex',
            justifyContent: 'center'
          }}><Button sx={{width: '50%'}} color='success' variant='contained'>Submit</Button></Box>

          </Box>
    </Container>
    </div>
  );
};

export default AddPc;

AddPc.getLayout = function getLayout(page){
  return <MainLayout>{page}</MainLayout>
}

{/* <TableCell align="center"><Button variant='contained'>ADD</Button></TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center"  colSpan={7}>
                <TextField sx={{width: '100%'}}
          id="outlined-multiline-flexible"
          label="SSD"
        />
              </TableCell> */}