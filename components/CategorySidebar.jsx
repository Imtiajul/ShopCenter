'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react";

const CategorySidebar = () => {
   const pathName = usePathname();
  return (
    <div className="w-full flex flex-col items-start lg:w-2/12 my-10 lg:my-0 lg:mt-4">
      <Link
        href={`/categories`}
        className={`${(pathName.split('/').length === 2 && pathName.split('/')[1] === 'categories') ? 'border-b' : 'border-none' } border-black inline-block h-6 box-border mt-4`}
      >
        All
      </Link>
      <Link
        href={`/categories/smartphones`}
        className={`${pathName.includes('/smartphones') ? 'border-b' : 'border-none' } border-black inline-block h-6 box-border mt-5`}
      >
        Smartphones
      </Link>
      <Link
        href={`/categories/laptops`}
        className={`${pathName.includes('/laptops') ? 'border-b' : 'border-none' } border-black inline-block h-6 box-border mt-5`}
      >
        Laptops
      </Link>
      <Link
        href={`/categories/fragrances`}
        className={`${pathName.includes('/fragrances') ? 'border-b' : 'border-none' } border-black inline-block h-6 box-border mt-5`}
      >
        Fragrances
      </Link>
      <Link
        href={`/categories/skincare`}
        className={`${pathName.includes('/skincare') ? 'border-b' : 'border-none' } border-black inline-block h-6 box-border mt-5`}
      >
        Skincare
      </Link>
      <Link
        href={`/categories/groceries`}
        className={`${pathName.includes('/groceries') ? 'border-b' : 'border-none' } border-black inline-block h-6 box-border mt-5`}
      >
        Groceries
      </Link>
    </div>
  )
}

export default CategorySidebar
