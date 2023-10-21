import Image, {ImageProps} from "next/image"

const PromoBanner = ({alt, ...props}: ImageProps) => {
  return (
    <Image
      width={0}
      height={0}
      className='h-auto w-full p-5'
      sizes="100vw"
      alt={alt}
      {...props}
    />
  )
}
 
export default PromoBanner;