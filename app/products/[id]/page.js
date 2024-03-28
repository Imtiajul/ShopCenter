import ProductAvatar from "@/components/product/ProductAvatar";
import ProductInfo from "@/components/product/ProductInfo";
import { getSingleProduct } from "@/utils";

const SignleProductPage = ({ params: { id } }) => {
   const product = getSingleProduct(id);
   return (
      <main className="h-screen">
         <section className="bg-[#fafaf2] h-full py-20">
            <div className="w-11/12 lg:w-8/12 max-w-7xl mx-auto flex flex-col gap-12 lg:flex-row items-center justify-between">
                  <ProductAvatar product={product}/>
                  <ProductInfo product={product} />
            </div>
         </section>
      </main>
   )
}

export default SignleProductPage
