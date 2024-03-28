import { db } from "@/database/db";

export const getSingleProduct = (id) => {
   return db.products[--id]
}

export const getAllProduct = () => {
   const products = []

   for(let i=0; i<12; i++) {
      products.push(db.products[i]);
   }

   return products;
}

export const getCategorizedProduct = (name) => {
   return db.products.filter(product => product.category === name);
}