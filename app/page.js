import Hero from "@/components/Hero";
import HeroText from "@/components/HeroText";
import ProductList from "@/components/product/ProductList";
import { db } from "@/database/db";
import CallForAction from "@/sections/CallForAction";
import { getAllProduct } from "@/utils";

export default function Home() {
  const products = getAllProduct();
  // console.log(products);
  return (
    <>
   <Hero><HeroText/></Hero>
      <ProductList products={products} />
      <CallForAction/>
    </>
  );
}
