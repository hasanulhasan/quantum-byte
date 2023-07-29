import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useGetProductsQuery } from '@/redux/api/apiSlice';
import { Box } from '@mui/material';
import ProductCard from './ProductCard';

const AllProducts = () => {
  const {data:products} = useGetProductsQuery();

  return (
    <div>
    <Box sx={{ '& > :not(style)': { m: 2, mt: 3 }, display: 'flex', justifyContent: 'center' }}>
      <Box sx={{ display: 'flex', alignItems: 'flex-end'}}>
        <SearchIcon sx={{ color: 'action.active', m: 1, my: 0.5 }} />
        <TextField id="input-with-sx" label="search book" variant="standard" />
      </Box>
      <Box>
         <FormControl variant="outlined" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">Filter</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          // value={age}
          // onChange={handleChange}
          label="Filter"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
         </FormControl>
      </Box>
    </Box>
      <Box sx={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
        {
          products?.map(product => <ProductCard key={product.id} product={product}></ProductCard>)
        }
      </Box>
    </div>
  );
};

export default AllProducts;