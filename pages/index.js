import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const Landing = () => {
  
  const [show,setShow]=useState(false);
  useEffect(()=>{
    setTimeout(()=>{
      setShow(true)
    },2000)
  },[])

  return (
   <>
   <section className='relative font-primary'>
   {!show ?<img className='blur-sm w-full object-cover absolute top-0 h-[80vh]' src='/video/vid_img.webp' />:
    <video  className="w-[100vw] -z-10 h-[80vh] rounded-b-3x object-cover center absolute background-fixed top-0" autoPlay loop muted >
      <source src={'/video/hero.mp4'}  type='video/mp4' />
    </video>}
    <main className=' text-white font-semibold p-8 h-[80vh] flex  flex-col items-baseline justify-end gap-6'>
      <div className='text-4xl'>Unite for a cause, make a difference today.</div>
    </main>
    <main className='flex flex-col p-6 gap-4'>
      <div className='font-bold text-3xl'>Hunger ZER-0</div>
      <div className='text-base'>We strive to eradicate hunger and malnutrition in communities across the world. Our mission is to provide food, resources and support to those in need and to raise awareness about the global food crisis. Join us in our fight against hunger by making a donation, volunteering your time, or spreading the word about our cause. Together, we can create a world where no one goes hungry</div>
      <button className='bg-neutral-900 text-white outline-none p-3 font-medium rounded-lg w-48'>Join us in our mission</button>
    </main>
   </section>
   </>
  )
}

export default Landing