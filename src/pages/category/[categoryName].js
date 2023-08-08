import CategoryProducts from '@/components/Category/CategoryProducts';
import MainLayout from '@/components/Layouts/MainLayout';
import { Box, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch } from 'react-redux';
import { searchText, sortType } from '@/redux/api/filterSlice';

const CategoryPage = ({products}) => {
  const dispatch = useDispatch();
  const router = useRouter();
  let content = null;
  if (products?.length === 0) { content = <h1>There is no product</h1> }
  if (products?.length > 0) { content = <CategoryProducts products={products}></CategoryProducts> }

  return (
    <div>
      <Box sx={{
          backgroundImage: `url(https://fixpointqatar.com/img/accessories_banner.jpg)`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          height: "250px",
        }}
      >
        <Typography
          align="center"
          color={"#E74C3C"}
          variant="h2"
          sx={{  fontWeight: 900, pt: 5}}
        >
          {router.query.categoryName}
        </Typography>
      </Box>

      <Box sx={{ '& > :not(style)': { m: 2, mt: 3 }, display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
            <Box sx={{ display: 'flex', alignItems: 'flex-end'}}>
              <SearchIcon sx={{ color: 'action.active', m: 1, my: 0.5 }} />
              <TextField onChange={(e)=> {dispatch(searchText(e.target.value))}} id="input-with-sx" label="Search product" variant="standard" />
            </Box>
      <Box>
         <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">Price</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          onChange={(e)=> dispatch(sortType(e.target.value))}
          label="Price"
        >
          <MenuItem value=''>Default</MenuItem>
          <MenuItem value='asc'>Low to High</MenuItem>
          <MenuItem value='dec'>High to Low</MenuItem>
        </Select>
         </FormControl>
      </Box>
    </Box>
      {
        content
      }
    </div>
  );
};

export default CategoryPage;

CategoryPage.getLayout = function getLayout(page){
  return <MainLayout>{page}</MainLayout>
}

export const getStaticPaths = async () => {
  const res = await fetch('https://quantum-byte-backend-hasanulhasan.vercel.app/v1/products')
  const {data: products} = await res.json();

  const paths = products.map(product=> ({
    params: {categoryName: product.category}
  }))
  return {paths, fallback: false}
}

export const getStaticProps = async (context)=> {
  const {params} = context;
  const res = await fetch(`https://quantum-byte-backend-hasanulhasan.vercel.app/v1/products/category/${params.categoryName}`)
  const data = await res.json();
  // console.log(data)
  return {
    props: {
      products: data?.data,
    }
  }
}