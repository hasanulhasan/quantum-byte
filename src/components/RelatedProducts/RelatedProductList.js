import { Avatar, ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import React from 'react';

const RelatedProductList = ({relatedProduct}) => {
  const {name, img, price} = relatedProduct;
  return (
    <ListItem alignItems="flex-end">
          <ListItemAvatar>
            <Avatar
              sx={{ height: 80, width: 80 }}
              variant="square"
              alt="Remy Sharp"
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