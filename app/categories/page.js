import Product from '@/components/product/Product';
import { db } from '@/database/db';
const CategoriesPage = () => {
  const products= db.products;

  return  products?.map(product =>(
    <Product key={product.id} product={product}/>
 ))

}

export default CategoriesPage
