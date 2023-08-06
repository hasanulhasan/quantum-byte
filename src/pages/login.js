import { Avatar, Box, Button, Checkbox, Container, CssBaseline, Divider, FormControlLabel, Grid, TextField, Typography } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import MainLayout from '@/components/Layouts/MainLayout';
import TwitterIcon from '@mui/icons-material/Twitter';
import {auth} from '../utils/firebase'
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useRouter } from 'next/router';

const Login = () => {
  const router =useRouter();
  const [signInWithEmailAndPassword,user,loading,error] = useSignInWithEmailAndPassword(auth);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    signInWithEmailAndPassword(data.get('email'), data.get('password')).then(data=> {
      if(data){
        router.push('/')
      }
    }).catch(err=> {alert('You have entered wrong password or email')})
    if(error){
      console.log(error)
    }
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
            Sign in
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
              Sign In
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
      <GitHubIcon sx={{ width: 46, height: 46 }}/>
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

export default Login;

Login.getLayout = function getLayout(page){
  return <MainLayout>{page}</MainLayout>
}