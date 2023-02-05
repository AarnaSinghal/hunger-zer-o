import React, { useState } from 'react'
import Image from 'next/image'

const HeaderReg = () => {

  const [headerReg, setHeaderReg] = useState("")

  const [name, setName] = useState("")
  const [location, setLocation] = useState("")
  const [phone, setPhone] = useState("")
  const [adhaar, setAdhaar] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  console.log("Name: ", name)
  console.log("Location: ", location)
  console.log("Phone: ", phone)
  console.log("Adhaar: ", adhaar)
  return (
    <>
      <div class=" font-primary">
        <div class="flex w-full relative">
          <Image src={'/images/registerHeader.jpg'} width={200} height={200} class="object-cover h-auto w-full"></Image>
          <h1 class="absolute inset-x-5 bottom-5 text-white text-3xl bg-opacity-10 font-bold md:bg-fixed backdrop-opacity-40">Register as Donor</h1>
        </div>
        
        <form>

       
        <main className='flex flex-col gap-4 p-2'>

        <div className='flex flex-col gap-2 '>
            <div className='text-lg font-medium'>Name</div>
            <input required type={'text'} className='p-2 outline-none border-[1px] border-gray-200 rounded text-lg focus:ring-white bg-gray-100' placeholder='e.g. Business name' />
        </div>
        <div className='flex flex-col gap-2 '>
            <div className='text-lg font-medium'>Location</div>
            <input required type={'text'} className='p-2 outline-none border-[1px] border-gray-200 rounded text-lg focus:ring-white bg-gray-100' placeholder='e.g.142 BK Street' />
        </div>
        <div className='flex flex-col gap-2 '>
            <div className='text-lg font-medium'>
            Phone
            </div>
            <input required type={'number'} className='p-2 outline-none border-[1px] border-gray-200 rounded text-lg focus:ring-white bg-gray-100' placeholder='+91 XXXXXXXXXX' />
           
        </div>
        <div className='flex flex-col gap-2 '>
            <div className='text-lg font-medium'>
            Adhaar Number
            </div>
            <input required type={'number'} className='p-2 outline-none border-[1px] border-gray-200 rounded text-lg focus:ring-white bg-gray-100' placeholder='XXXXXXXXXXXX' />
        </div>
        <div className='flex flex-col gap-2 '>
            <div className='text-lg font-medium'>
            Email
            </div>
            <input required type={'email'} className='p-2 outline-none border-[1px] border-gray-200 rounded text-lg focus:ring-white bg-gray-100' placeholder='e.g.business@gmail.com' />
           
        </div>
        <div className='flex flex-col gap-2 '>
            <div className='text-lg font-medium'>
            Password
            </div>
            <input required type={'password'} className='p-2 outline-none border-[1px] border-gray-200 rounded text-lg focus:ring-white bg-gray-100' placeholder='e.g.atleast 6 digits' />
           
        </div>
        <button type="submit" class="text-white bg-black text-white focus:outline-none font-medium rounded text-base px-5 py-2.5 text-center mr-2 mb-2">REGISTER</button>

       </main>
       </form>
      </div>

    </>
  )
}

export default HeaderReg;