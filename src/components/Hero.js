import React from "react";
import { Box, Typography } from "@mui/material";
import Link from "next/link";
import styles from './../styles/hero.module.css'

const Hero = () => {
  return (
    <Box className={styles.home} sx={{ backgroundImage: `url('/banner.jpg')`} }>
        <div className={styles.headerContainer} >
          <h1>Quantum Byte</h1>
          <p>Best PC Solution in your hand</p>
          <Link href='/'>
            <button>
              EXPLORE US
            </button>
          </Link>
        </div>
    </Box>
  );
};

export default Hero;
