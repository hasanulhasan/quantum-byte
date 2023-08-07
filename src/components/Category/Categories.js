import React from "react";
import { Box, Divider, Stack, styled, Typography } from "@mui/material";
import CategoryCard from "./CategoryCard";

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

const categories = [
  {
    id: 1,
    ct_name: 'RAM',
    img: 'https://www.gigabyte.com/FileUpload/global/Insight/Article/198/o202208011125048397.png'
  },
  {
    id: 2,
    ct_name: 'Processor',
    img: 'https://cdn.mos.cms.futurecdn.net/NSYr6nsP63PRbdJFMNL5pT.jpg'
  },
  {
    id: 3,
    ct_name: 'SSD',
    img: 'https://f.hubspotusercontent40.net/hubfs/4650993/New_Avast_Academy/What%20is%20SSD/Academy-What-is-an-SSD-Thumb-a1.jpg'
  },
  {
    id: 4,
    ct_name: 'Motherboard',
    img: 'https://pimages.toolbox.com/wp-content/uploads/2023/02/10044719/Picture-of-a-motherboard.jpg'
  },
  {
    id: 5,
    ct_name: 'Monitor',
    img: 'https://media.wired.com/photos/62f691dc9a81878b183eb0c3/4:3/w_2400,h_1800,c_limit/Best-Monitors-Top-Gear.jpg'
  },
  {
    id: 6,
    ct_name: 'PSU',
    img: 'https://www.technewstoday.com/wp-content/uploads/2023/05/Best-500W-PSU-1.jpg'
  },
]

const Categories = () => {
  return (
    <div>
      <Typography variant="h3" my={3} sx={{textAlign: 'center'}}>Featured Product</Typography>
      <Box sx={{ mx: 5, mt: 3 }}>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 1, sm: 2, md: 2 }}
        divider={<Divider orientation="vertical" flexItem />}
        mt={5}
      >
        {
          categories.map(category => <CategoryCard key={category.id} category={category}></CategoryCard>)
        }
      </Stack>
    </Box>
    </div>
  );
};

export default Categories;
