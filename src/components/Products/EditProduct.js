import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { Box, Checkbox, FormControl, FormControlLabel, Grid, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import * as React from 'react';
import { useState } from 'react';
import { useEditProductMutation } from '@/redux/api/apiSlice';
import { useRouter } from 'next/router';

const EditProduct = ({product}) => {
  const router = useRouter();
  const {_id,name, img, price, rating, category, status:initialStatus, features, description, reviews} = product;
  const [editProduct] = useEditProductMutation();
  const [status, setStatus] = useState(initialStatus);

  const handleSubmit = (e)=> {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const product = {
      name: data.get('name'),
      img: data.get('img'),
      price: data.get('price'),
      category: data.get('category'),
      rating: data.get('rating'),
      status: status,
      description: data.get('description'),
      features: [data.get('feature-1'),data.get('feature-2')],
      reviews: reviews
    }
    console.log(product)
    
    try {
      editProduct(_id, product)
        alert('Product Edited')
        router.push(`/${_id}`)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Container component="main" maxWidth="sm" sx={{mb:6}}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Typography component="h1" variant="h4" align="center">
            Edit
          </Typography>
          <Box component="form" onSubmit={handleSubmit}>
      <Typography variant="h6" gutterBottom>
        {name}
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="name"
            name="name"
            label="Name"
            fullWidth
            variant="standard"
            defaultValue={name}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
        <FormControl variant="standard" fullWidth>
        <InputLabel id="demo-simple-select-standard-label">Rating</InputLabel>
        <Select
          required
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          name='category'
          defaultValue={category}
          // onChange={handleChange}
          label="Category"
        >
          <MenuItem value='Processor'>Processor</MenuItem>
          <MenuItem value='Motherboard'>Motherboard</MenuItem>
          <MenuItem value='Monitor'>Monitor</MenuItem>
          <MenuItem value='RAM'>RAM</MenuItem>
          <MenuItem value='SSD'>SSD</MenuItem>
          <MenuItem value='PSU'>PSU</MenuItem>
        </Select>
      </FormControl>
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="img"
            name="img"
            label="Photo URL"
            fullWidth
            variant="standard"
            defaultValue={img}
          />
        </Grid>
        
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="price"
            name="price"
            label="Price"
            fullWidth
            variant="standard"
            defaultValue={price}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
        <FormControl variant="standard" fullWidth>
        <InputLabel id="demo-simple-select-standard-label">Rating</InputLabel>
        <Select
          required
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          name='rating'
          defaultValue={rating}
          // onChange={handleChange}
          label="Rating"
        >
          <MenuItem value='1'>1</MenuItem>
          <MenuItem value='2'>2</MenuItem>
          <MenuItem value='3'>3</MenuItem>
          <MenuItem value='4'>4</MenuItem>
          <MenuItem value='5'>5</MenuItem>
        </Select>
      </FormControl>
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="description"
            name="description"
            label="Description"
            fullWidth
            multiline
            variant="standard"
            defaultValue={description}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="feature-1"
            name="feature-1"
            label="Feature-1"
            fullWidth
            variant="standard"
            defaultValue={features[0]}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="feature-2"
            name="feature-2"
            label="Feature-2"
            fullWidth
            variant="standard"
            defaultValue={features[1]}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox onChange={()=> setStatus(!status)} color="secondary" name="stockStatus" checked={status} />}
            checked={status}
            label="In Stock"
          />
        </Grid>
      </Grid>
        <Button type='submit' fullWidth variant="contained" sx={{ mt: 3}}>Submit</Button>
          </Box>
        </Paper>
      </Container>
  );
};

export default EditProduct;