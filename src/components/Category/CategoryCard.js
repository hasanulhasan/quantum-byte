import { styled, Box, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import React from 'react';
const StyledBox = styled(Box)({
  height: 200,
  width: "100%",
  cursor: "pointer",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center center",
  backgroundSize: "cover",
});
const StyledTypography = styled(Typography)({
  margin: "25% 50px 25% 50px",
  background: "white",
  opacity: "0.8",
  borderRadius: '10px'
});


const CategoryCard = ({category}) => {
  const {ct_name, img} = category;
  const router = useRouter();

  const handleCategoryPage = ()=> {
    router.push(`category/${ct_name}`)
  }

  return (
    <StyledBox onClick={handleCategoryPage} sx={{ backgroundImage: `url(${img})` }}>
          <StyledTypography align="center" variant="h4">
            {ct_name}
          </StyledTypography>
    </StyledBox>
  );
};

export default CategoryCard;