import { AppBar, Box, Button, Divider, Drawer, FormControl, IconButton, InputLabel, Menu, MenuItem, Select, Toolbar, Typography } from '@mui/material';
import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';
// import Logo from '../../images/logo.svg'
import styles from './../../styles/header.module.css'
import AccountCircle from '@mui/icons-material/AccountCircle';
import { useRouter } from 'next/router';

const Header = () => {
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [categoryEl, setCategoryEl] = useState(null);

  const handleRoute = (route)=> {
    router.push(`/category/${route}`)
  }
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCategory = (event) => {
    setCategoryEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setCategoryEl(null)
  };

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
      </ul>
    </Box>
  )
  return (
    <>
      <Box>
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
              sx={{ flexGrow: 1, fontWeight: 'bold', cursor: 'pointer'  }}
            >
              Quantum Byte
            </Typography>
            <Box sx={{ display: { xs: 'none', sm: 'block'} }}>
              <ul className={styles.navigationMenu}>
                <li><Link href='/'>Home</Link></li>
                <li><Link href='/about'>About</Link></li>
                <li>
              <p aria-controls="category" aria-haspopup="true" onClick={handleCategory}>Category</p>
              <Menu
                id="category"
                anchorEl={categoryEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(categoryEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={()=> handleRoute('Processor')}>Processor</MenuItem>
                <MenuItem onClick={()=> handleRoute('Motherboard')}>Motherboard</MenuItem>
                <MenuItem onClick={()=> handleRoute('Monitor')}>Monitor</MenuItem>
                <MenuItem onClick={()=> handleRoute('RAM')}>RAM</MenuItem>
                <MenuItem onClick={()=> handleRoute('SSD')}>SSD</MenuItem>
                <MenuItem onClick={()=> handleRoute('PSU')}>PSU</MenuItem>
              </Menu>
            {/* </div> */}
                </li>
    <li>
      <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
              </Menu>
            </div>
            </li>
            <li><Link href='/addpc'><Button variant='contained' color='success'>Add PC</Button></Link></li>
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