import React from "react";
import kidsImage from "../../assets/processor.png";
import womenImage from "../../assets/ram.jpg";
import menImage from "../../assets/ssd.jpg";
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
    img: 'https://www.gigabyte.com/FileUpload/global/Insight/Article/198/o202208011125048397.png'
  },
  {
    id: 4,
    ct_name: 'Motherboard',
    img: 'https://www.gigabyte.com/FileUpload/global/Insight/Article/198/o202208011125048397.png'
  },
  {
    id: 5,
    ct_name: 'Monitor',
    img: 'https://www.gigabyte.com/FileUpload/global/Insight/Article/198/o202208011125048397.png'
  },
  {
    id: 6,
    ct_name: 'PSU',
    img: 'https://www.gigabyte.com/FileUpload/global/Insight/Article/198/o202208011125048397.png'
  },
]

const Categories = () => {
  return (
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
  );
};

export default Categories;
