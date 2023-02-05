import React, { useState } from 'react'
import Image from 'next/image'
import { handleReg } from '../utils/apiService'

const HeaderReg = () => {

  const [user,setUser]=useState({name:"",location:"",phone:"",adhaar:"",email:"",password:"",is_donor:true})
  const handleChange=(e,keys)=>{
    setUser({
      ...user,
      [keys]:e.target.value
    })
  }
  const handleSubmit=(e)=>{
    console.log(user)
    e.preventDefault();
    handleReg(user);
  }
  return (
    <>
      <div class=" font-primary">
        <div class="flex w-full relative">
          <Image src={'/images/registerHeader.jpg'} width={200} height={200} class="object-cover h-auto w-full"></Image>
          <h1 class="absolute inset-x-5 bottom-5 text-white text-3xl bg-opacity-10 font-bold md:bg-fixed backdrop-opacity-40">Register as Donor</h1>
        </div>
        
     

       
        <main className='flex flex-col gap-4 p-2'>

        <div className='flex flex-col gap-2 '>
            <div className='text-lg font-medium'>Name</div>
            <input onChange={(e)=>handleChange(e,"name")} required type={'text'} className='p-2 outline-none border-[1px] border-gray-200 rounded text-lg focus:ring-white bg-gray-100' placeholder='e.g. Business name' />
        </div>
        <div className='flex flex-col gap-2 '>
            <div className='text-lg font-medium'>Location</div>
            <input onChange={(e)=>handleChange(e,"location")} required type={'text'} className='p-2 outline-none border-[1px] border-gray-200 rounded text-lg focus:ring-white bg-gray-100' placeholder='e.g.142 BK Street' />
        </div>
        <div className='flex flex-col gap-2 '>
            <div className='text-lg font-medium'>
            Phone
            </div>
            <input onChange={(e)=>handleChange(e,"phone")} required type={'number'} className='p-2 outline-none border-[1px] border-gray-200 rounded text-lg focus:ring-white bg-gray-100' placeholder='+91 XXXXXXXXXX' />
           
        </div>
        <div className='flex flex-col gap-2 '>
            <div className='text-lg font-medium'>
            Adhaar Number
            </div>
            <input onChange={(e)=>handleChange(e,"adhaar")} required type={'number'} className='p-2 outline-none border-[1px] border-gray-200 rounded text-lg focus:ring-white bg-gray-100' placeholder='XXXXXXXXXXXX' />
        </div>
        <div className='flex flex-col gap-2 '>
            <div className='text-lg font-medium'>
            Email
            </div>
            <input onChange={(e)=>handleChange(e,"email")} required type={'email'} className='p-2 outline-none border-[1px] border-gray-200 rounded text-lg focus:ring-white bg-gray-100' placeholder='e.g.business@gmail.com' />
           
        </div>
        <div className='flex flex-col gap-2 '>
            <div className='text-lg font-medium'>
            Password
            </div>
            <input required onChange={(e)=>handleChange(e,"password")} type={'password'} className='p-2 outline-none border-[1px] border-gray-200 rounded text-lg focus:ring-white bg-gray-100' placeholder='e.g.atleast 6 digits' />
           
        </div>
        <button  onClick={handleSubmit}  class="text-white bg-black text-white focus:outline-none font-medium rounded text-base px-5 py-2.5 text-center mr-2 mb-2">REGISTER</button>

       </main>
     
      </div>

    </>
  )
}

export default HeaderReg;