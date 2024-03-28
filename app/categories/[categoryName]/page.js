import Product from '@/components/product/Product';
import ProductList from '@/components/product/ProductList';
import { getCategorizedProduct } from '@/utils';

const SignleCategoryPage = ({params: {categoryName}}) => {

   const categorizedProduct = getCategorizedProduct(categoryName);

  return (
   categorizedProduct.map(product =>(
      <Product key={product.id} product={product}/>
   ))
  )
}

export default SignleCategoryPage
