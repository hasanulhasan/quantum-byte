import React from "react";
import kidsImage from "../../assets/processor.png";
import womenImage from "../../assets/ram.jpg";
import menImage from "../../assets/ssd.jpg";
import { Box, Divider, Stack, styled, Typography } from "@mui/material";

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

const Categories = () => {
  return (
    <Box sx={{ mx: 5, mt: 3 }}>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 1, sm: 2, md: 2 }}
        divider={<Divider orientation="vertical" flexItem />}
        mt={5}
      >
        <StyledBox sx={{ backgroundImage: `url(https://www.gigabyte.com/FileUpload/global/Insight/Article/198/o202208011125048397.png)` }}>
          <StyledTypography align="center" variant="h4">
            Processor
          </StyledTypography>
        </StyledBox>
        <StyledBox sx={{ backgroundImage: `url(https://www.gigabyte.com/FileUpload/global/Insight/Article/198/o202208011125048397.png)` }}>
          <StyledTypography align="center" variant="h4">
            RAM
          </StyledTypography>
        </StyledBox>
        <StyledBox sx={{ backgroundImage: `url(https://cdn.mos.cms.futurecdn.net/NSYr6nsP63PRbdJFMNL5pT.jpg)` }}>
          <StyledTypography align="center" variant="h4">
            SSD
          </StyledTypography>
        </StyledBox>
        <StyledBox sx={{ backgroundImage: `url(https://www.gigabyte.com/FileUpload/global/Insight/Article/198/o202208011125048397.png)` }}>
          <StyledTypography align="center" variant="h4">
            Motherboard
          </StyledTypography>
        </StyledBox>
        <StyledBox sx={{ backgroundImage: `url(https://www.gigabyte.com/FileUpload/global/Insight/Article/198/o202208011125048397.png)` }}>
          <StyledTypography align="center" variant="h4">
            PSU
          </StyledTypography>
        </StyledBox>
        <StyledBox sx={{ backgroundImage: `url(https://cdn.mos.cms.futurecdn.net/NSYr6nsP63PRbdJFMNL5pT.jpg)` }}>
          <StyledTypography align="center" variant="h4">
            Monitor
          </StyledTypography>
        </StyledBox>
      </Stack>
    </Box>
  );
};

export default Categories;
