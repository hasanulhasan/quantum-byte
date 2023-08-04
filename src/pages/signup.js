import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';
import MainLayout from '@/components/Layouts/MainLayout';
import { Divider, Grid } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import { signIn } from 'next-auth/react';
import {auth} from '../utils/firebase'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';

const Signup = () => {
  const [signInWithEmailAndPassword,user,loading,error] = useCreateUserWithEmailAndPassword(auth);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    signInWithEmailAndPassword(data.get('email'), data.get('password'))
  };

  return (
    <div style={{height: '70vh', marginLeft: '15px', marginRight: '15px'}}>
      <Container component="main" maxWidth="xs" sx={{ border: 1, marginTop: '25px', borderRadius: '10px'}}>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Box sx={{textAlign: 'center', fontSize: '22px'}} p={2}>
              Or Login with
            <Grid container mt={2}>
      <Grid item xs>
      <GoogleIcon sx={{ width: 46, height: 46 }}/>
      </Grid>
      <Divider orientation="vertical" flexItem>
      </Divider>
      <Grid item xs>
      <GitHubIcon onClick={()=> signIn("github")} sx={{cursor: 'pointer', width: 46, height: 46 }}/>
      </Grid>
      <Divider orientation="vertical" flexItem>
      </Divider>
      <Grid item xs>
      <TwitterIcon sx={{ width: 46, height: 46 }}/>
      </Grid>
    </Grid>
            </Box>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default Signup;

Signup.getLayout = function getLayout(page){
  return <MainLayout>{page}</MainLayout>
}