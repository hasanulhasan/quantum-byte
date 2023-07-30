import { AppBar, Box, Button, Divider, Drawer, FormControl, IconButton, InputLabel, MenuItem, Select, Toolbar, Typography } from '@mui/material';
import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';
// import Logo from '../../images/logo.svg'
import styles from './../../styles/header.module.css'

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  //menu drawer
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography
        color={'goldenrod'}
        variant='h5'
        component={'div'}
        sx={{ flexGrow: 1, my: 2, fontWeight: 'bold' }}
      >
        Quantum Byte
      </Typography>
      <Divider />
      <ul className={styles.mobileNavigation}>
        <li><Link href='/'>Home</Link></li>
        <li><Link href='/about'>About</Link></li>
        <li><Link href='/contact'>Contact</Link></li>
      </ul>
    </Box>
  )
  return (
    <>
      <Box sx={{
                // marginBottom: 2
              }}>
        <AppBar component={'nav'} sx={{ bgcolor: 'black' }}>
          <Toolbar>
            <IconButton
              color='inherit'
              aria-level='open drawer'
              edge='start'
              sx={{
                margin: 2, display: { sm: 'none' }
              }}
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              color={'goldenrod'}
              variant='h5'
              component={'div'}
              sx={{ flexGrow: 1, fontWeight: 'bold'  }}
            >
              Quantum Byte
            </Typography>
            <Box sx={{ display: { xs: 'none', sm: 'block'} }}>
              <ul className={styles.navigationMenu}>
                <li><Link href='/'>Home</Link></li>
                <li><Link href='/about'>About</Link></li>
                <li><Link href='/contact'>Contact</Link></li>
                <li><Link href='/addpc'><Button variant='contained' color='success'>Add PC</Button></Link></li>
                <li><Box sx={{ minWidth: 120, bgcolor: '#6D6765', color: 'success' }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Category</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value='Category'
          label="Age"
          // onChange={handleChange}
        >
          <MenuItem value={10}>Motherboard</MenuItem>
          <MenuItem value={20}>Processor</MenuItem>
          <MenuItem value={30}>RAM</MenuItem>
          <MenuItem value={30}>PSU</MenuItem>
          <MenuItem value={30}>SSD</MenuItem>
          <MenuItem value={30}>Monitor</MenuItem>
          <MenuItem value={30}>Others</MenuItem>
        </Select>
      </FormControl>
    </Box></li>
              </ul>
              
            </Box>
          </Toolbar>
        </AppBar>
        <Box component='nav'>
          <Drawer
            variant='temporary'
            onClose={handleDrawerToggle}
            open={mobileOpen}
            sx={{
              display: { xs: 'block', sm: 'none' }, "& .MuiDrawer-paper": {
                boxSizing: 'border-box',
                width: '240px'
              }
            }}
          >
            {drawer}
          </Drawer>
        </Box>
        <Box>
          <Toolbar />
        </Box>
      </Box>
    </>
  );
};

export default Header;