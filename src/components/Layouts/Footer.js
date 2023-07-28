import { Box, Typography } from '@mui/material';
import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
  return (
    <>
      <Box sx={{ textAlign: 'center', bgcolor: '#1A1A19', color: 'white', p: 3,mt: 5}}>
        <Box sx={{
          my: 3,
          "& svg": {
            fontSize: '60px',
            cursor: 'pointer',
            mr: 2
          },
          "& svg:hover": {
            color: 'goldenrod',
            transform: 'translateX(5px)',
            transition: 'all 400ms'
          }
        }}>
          <InstagramIcon />
          <FacebookIcon />
          <EmailIcon />
          <YouTubeIcon />
        </Box>
        <Typography
          variant='h5'
          sx={{
            "@media (max-width: 600px)": {
              fontSize: '1rem'
            }
          }}
        >
          All Right Reserved &copy; Quantum Byte
        </Typography>
      </Box>
    </>
  );
};

export default Footer;