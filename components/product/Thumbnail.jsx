import Image from "next/image"

const Thumbnail = ({ thumb, name, setCurrentImg }) => {
  return (
    <Image
      src={thumb}
      className="w-[100px] h-[100px] mx-auto border object-cover cursor-pointer"
      width={400}
      height={500}
      alt={name}
      onMouseEnter={()=> setCurrentImg(thumb)}
    />
  )
}

export default Thumbnail
