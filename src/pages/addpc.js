import MainLayout from '@/components/Layouts/MainLayout';
import styles from '../styles/addpc.module.css'
import { Box, Button, Container, TextField, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';

const AddPc = () => {
  const {processor,monitor, motherboard, ram, ssd, psu} = useSelector(state => state.productChoice)
  const router = useRouter();
  
  const handleChoicePageRoute = (category) => {
    router.push(`/choiceCategory/${category}`)
  }
  const handleSubmit = (e)=> {
    e.preventDefault()
    toast.success('You have successfully build your PC')
  }

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

          <form onSubmit={handleSubmit}> 
          <Box  sx={{
            padding: '10px', 
            display: 'flex',
          }}><TextField sx={{width: '100%', marginRight: '10px'}}
          id="outlined-multiline-flexible"
          label="Motherboard" value={motherboard.name} required
        /><Button variant='contained' onClick={()=> handleChoicePageRoute('Motherboard')}>ADD</Button></Box>

          <Box  sx={{
            padding: '10px', 
            display: 'flex',
          }}><TextField sx={{width: '100%', marginRight: '10px'}}
          id="outlined-multiline-flexible"
          label="Monitor" value={monitor.name} required
        /><Button variant='contained' onClick={()=> handleChoicePageRoute('Monitor')}>ADD</Button></Box>

          <Box  sx={{
            padding: '10px', 
            display: 'flex',
          }}><TextField sx={{width: '100%', marginRight: '10px'}}
          id="outlined-multiline-flexible"
          label="Processor" value={processor.name} required
        /><Button variant='contained' onClick={()=> handleChoicePageRoute('Processor')}>ADD</Button></Box>

          <Box  sx={{
            padding: '10px', 
            display: 'flex',
          }}><TextField sx={{width: '100%', marginRight: '10px'}}
          id="outlined-multiline-flexible"
          label="RAM" value={ram.name} required
        /><Button variant='contained' onClick={()=> handleChoicePageRoute('RAM')}>ADD</Button></Box>

          <Box  sx={{
            padding: '10px', 
            display: 'flex',
          }}><TextField sx={{width: '100%', marginRight: '10px'}}
          id="outlined-multiline-flexible"
          label="SSD" value={ssd.name} required
        /><Button variant='contained' onClick={()=> handleChoicePageRoute('SSD')}>ADD</Button></Box>
        
          <Box  sx={{
            padding: '10px', 
            display: 'flex',
          }}><TextField sx={{width: '100%', marginRight: '10px'}}
          id="outlined-multiline-flexible"
          label="PSU" value={psu.name} required
        /><Button variant='contained' onClick={()=> handleChoicePageRoute('PSU')}>ADD</Button></Box>

          <Box sx={{
            padding: '10px', 
            display: 'flex',
            justifyContent: 'center'
          }}><Button type='submit' sx={{width: '50%'}} color='success' variant='contained'>Submit</Button></Box>
          </form>

          </Box>
          <Toaster/>
    </Container>
    </div>
  );
};

export default AddPc;

AddPc.getLayout = function getLayout(page){
  return <MainLayout>{page}</MainLayout>
}