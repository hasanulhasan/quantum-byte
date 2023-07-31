import { Avatar,Box,Divider,List,ListItem,ListItemAvatar,ListItemText,Typography,} from "@mui/material";
import RelatedProductList from "./RelatedProductList";
import { useGetCategoryProductsQuery } from "@/redux/api/apiSlice";

const RelatedProducts = ({category, id}) => {
  const {data, isLoading, isError, error} = useGetCategoryProductsQuery(category);
  const relatedProducts = data?.data
  
  let content = null;
  if (isLoading) content = <h1>Loading...</h1>
  if (!isLoading && isError) content = <h1>There is an error</h1>;
  if (!isLoading && !isError && relatedProducts?.length === 0) { content = <h1>There is no such product</h1> }
  if (!isLoading && !isError && relatedProducts?.length > 0) { 
    content = relatedProducts.filter(product=> product._id !== id ).map(relatedProduct => <RelatedProductList key={relatedProduct._id} relatedProduct={relatedProduct}></RelatedProductList>)
  }

  return (
    <Box>
      <Typography align="center" bgcolor={"black"} color="white">
        Related Products
      </Typography>
      <List
        sx={{
          width: "100%",
          height: "100%",
          maxWidth: 360,
          bgcolor: "background.paper",
        }}
      >
        {
          content
        }
        <Divider variant="inset" component={"li"} />
      </List>
    </Box>
  )
};

export default RelatedProducts;