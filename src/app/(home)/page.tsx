"use client";
import Image from 'next/image'
import Categories from './components/categories';

export default function Home() {
  return (
    <div className="p-5">
      <Image 
        src="/banner-55off-home.png"
        width={0}
        height={0}
        className='h-auto w-full'
        sizes="100vw"
        alt='até 55% de descontos, só esse mês'
      />
      <div className="mt-8"></div>
      <Categories />
    </div>
  )
}
