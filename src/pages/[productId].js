import MainLayout from '@/components/Layouts/MainLayout';
import SingleProduct from '@/components/Products/SingleProduct';

const ProductDetails = ({product}) => {
  let content = null;

  if (product?.length !== 0) { content = <SingleProduct product={product}></SingleProduct> }
  else{
    content = <h1>There is no Product</h1>;
  }

  return (
    <div>
    {content}
    </div>
  );
};

export default ProductDetails;

ProductDetails.getLayout = function getLayout(page){
  return <MainLayout>{page}</MainLayout>
}

export const getStaticPaths = async () => {
  const res = await fetch('http://localhost:9000/v1/products')
  const {data: products} = await res.json();

  const paths = products.map(product=> ({
    params: {productId: product._id}
  }))
  return {paths, fallback: false}
}

export const getStaticProps = async (context)=> {
  const {params} = context;
  const res = await fetch(`http://localhost:9000/v1/products/${params.productId}`)
  const {data} = await res.json();
  return {
    props: {
      product: data
    },
    revalidate: 2
  }
}