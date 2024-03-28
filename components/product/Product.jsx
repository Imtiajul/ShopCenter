import Image from "next/image"
import Link from "next/link"
const Product = ({ product }) => {
  return (
    <>
      <div>
        <Link href={`/products/${product?.id}`}>
          <Image
            src={product?.thumbnail}
            width={310}
            height={270}
            alt={product?.title}
            className={`relative delay-150 w-180px lg:w-[270px] h-[205px] lg:h-[310px] bg-[#f8f8f8]  object-cover bg-center transition-all duration-3000 ease-in-out transform`}
          />
        </Link>
        <h2 className="text-sm lg:text-base mt-2">
          <Link
            className="text-base font-bold"
            href={`/products/${product?.id}`}
          >
            {product?.title}
          </Link>
          <span className="text-[#919090]">
            <Link href={`./categories/${product?.category}`}>
              ({product?.category})
            </Link>
          </span>
        </h2>
        <p className="text-[#919090] text-sm ">{product?.description}</p>

        <p className="text-rose-600 text-sm mt-4">
          <span className="text-[#919090] line-through">
            {product?.price.toFixed(2)}
          </span>{" "}
          {(
            product?.price -
            Math.round((product?.price * product?.discountPercentage) / 100)
          ).toFixed(2)}
        </p>
      </div>
    </>
  )
}

export default Product
