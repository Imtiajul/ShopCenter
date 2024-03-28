"use client"
import Image from "next/image"
import { useState } from "react"
import Thumbnail from "./Thumbnail"

const ProductAvatar = ({ product }) => {
  const [currentImg, setCurrentImg] = useState(product?.thumbnail)
  return (
    <div className="w-full lg:w-7/12 border border-slate-500/20 p-4">
      <Image
        src={currentImg}
        className="w-[400px] h-[500px] mx-auto object-cover"
        width={400}
        height={500}
        alt={name}
      />

      <div className="flex gap-4 mt-4">
        {product?.images.map((item) => (
          <Thumbnail
            key={item}
            setCurrentImg={setCurrentImg}
            thumb={item}
            name={product?.title}
          />
        ))}
      </div>
    </div>
  )
}

export default ProductAvatar
