import React from "react";
import { Box, Typography } from "@mui/material";
import HeroImage from "./../assets/banner.jpeg";
import Link from "next/link";
import styles from './../styles/hero.module.css'
const Hero = () => {
  return (
    <Box className={styles.home} sx={{ backgroundImage: `url(${HeroImage})` }}>
        <div className={styles.headerContainer} >
          <h1>Food Website</h1>
          <p>Best Food in India</p>
          <Link href='/'>
            <button>
              ORDER NOW
            </button>
          </Link>
        </div>
      </Box>
  );
};

export default Hero;