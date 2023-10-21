import Image from 'next/image'
import Categories from './components/categories';
import ProductList from './components/product-list';
import { prismaClient } from '@/lib/prisma';

export default async function Home() {
  const deals = await prismaClient.product.findMany({
    where: {
      discountPercentage: {
        gt: 0,
      }
    }
  })
  return (
    <div>
      <Image 
        src="/banner-55off-home.png"
        width={0}
        height={0}
        className='h-auto w-fulla p-5'
        sizes="100vw"
        alt='até 55% de descontos, só esse mês'
      />
      <div className="mt-8 p-5">
        <Categories />
      </div>
      <div className="mt-8">
        <ProductList products={deals} />
      </div>
      
    </div>
  )
}
