import Image from "next/image"
import Link from "next/link"

const ProductInfo = ({product}) => {
  return (
    <div class="w-full lg:w-5/12">
      <h1 class="italic text-xl lg:text-3xl font-serif font-semibold">
        {product?.title}
      </h1>
      <Link href={`/categories/${product?.category}`}><span class="text-[#919090] my-3">{product?.category}</span></Link>
      <div class="mt-3 flex items-center justify-start gap-1">
        <Image src="/svg/star.svg" width="20" height='20' alt="review icon" />
        <Image src="/svg/star.svg" width="20" height='20' alt="review icon" />
        <Image src="/svg/star.svg" width="20" height='20' alt="review icon" />
        <Image src="/svg/star.svg" width="20" height='20' alt="review icon" />
        <Image src="/svg/star.svg" width="20" height='20' alt="review icon" />
      </div>
      <hr class="my-5 bg-black" />
      <div>
        <p class="my-3">
          <span class="text-rose-600 opacity-60 line-through">{product?.price.toFixed(2)}</span> {" "}
          <span class="font-bold text-2xl">{(product?.price -
            Math.round((product?.price * product?.discountPercentage) / 100)).toFixed(2)}</span>
        </p>
      </div>
      <div>
        <p class="leading-7">
          {product?.description}
        </p>

        <button class="w-full bg-[#1a1a1a] hover:bg-[#3a3a3a] text-center py-3 mt-5 text-white rounded-full">
          Add To Cart - {(product?.price -
            Math.round((product?.price * product?.discountPercentage) / 100)).toFixed(2)}
        </button>
      </div>
    </div>
  )
}

export default ProductInfo
