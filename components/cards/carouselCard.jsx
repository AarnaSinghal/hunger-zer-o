import Image from 'next/image'
import React from 'react'

const CarouselCard = ({img}) => {
  return (
    <>
    {/* <Image 
    src={img}
    width={300}
    height={200}
    unoptimized
    objectFit='cover'
    className='rounded'
    /> */}
    <div className=' flex flex-col gap-2'>

    <img src={img} alt="" className='w-[230px] block rounded-lg h-[160px]' />
    <div className='text-lg font-medium'>FoodLife Inc</div>
    <div className='text-[15px]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod numquam exercitationem tenetur beatae, dicta at!</div>
    <button className='bg-black p-2 flex items-center gap-2  rounded text-sm font-medium text-white max-w-max'>Reach out  
    <Image 
    src={'/images/link.svg'}
    width={16}
    height={16}
    />
    </button>
    </div>
    </>
  )
}

export default CarouselCard