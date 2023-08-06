import { Avatar, ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import { useRouter } from 'next/router';
import React from 'react';

const RelatedProductList = ({relatedProduct}) => {
  const {_id,name, img, price} = relatedProduct;
  const router = useRouter();

  const handleGoDetailsPage = ()=> {
    router.push(`/${_id}`)
  }

  return (
    <ListItem sx={{cursor: 'pointer'}} onClick={handleGoDetailsPage} alignItems="flex-end">
          <ListItemAvatar>
            <Avatar
              sx={{ height: 80, width: 80 }}
              variant="square"
              alt="Related Products"
              src={img}
            />
          </ListItemAvatar>
          <ListItemText sx={{marginLeft: '10px'}}
            primary={`${name}`}
            secondary={`Price $${price}`}
          />
    </ListItem>
  );
};

export default RelatedProductList;