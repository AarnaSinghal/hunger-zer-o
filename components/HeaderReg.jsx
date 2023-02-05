import React, { useState } from 'react'
import Image from 'next/image'
import 'tailwindcss/tailwind.css'

export const HeaderReg = () => {

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
      <div class="">
        <div class="flex w-full relative">
          <Image src={'/images/registerHeader.jpg'} width={200} height={200} class="object-cover h-auto w-full"></Image>
          <h1 class="absolute inset-x-5 bottom-5 text-white text-3xl bg-opacity-10 font-bold md:bg-fixed backdrop-opacity-40">Register as Donor</h1>
        </div>

        <div class="md:container md:mx-auto flex flex-col m-4 p-4 ">
          <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div class="mb-4">
              <label htmlFor="Name" class="flex flex-col text-gray-700 text-xl font-bold mb-5">
              Name
                <input type="text" placeholder='Enter Your Name' value={name} onChange={({ target }) => setName(target?.value)} required 
                class="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-3 w-1/4"/>
              </label>
            </div>
            <div class="mb-4">
              <label htmlFor="Location" class="flex flex-col text-gray-700 text-xl font-bold mb-5">Location
                <input type="text" placeholder='Enter Your Location' value={location} onChange={({ target }) => setLocation(target?.value)} required class="shadow appearance-none border rounded w-auto py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-3 w-1/4"/>
              </label>
            </div>
            <div class="mb-4">
              <label htmlFor="Phone" class="flex flex-col text-gray-700 text-xl font-bold mb-5">Phone
                <input type="tel" minLength={10} maxLength={10} placeholder='Enter Your Phone' value={phone} onChange={({ target }) => setPhone(target?.value)} required class="shadow appearance-none border rounded w-auto py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-3 w-1/4"/>
              </label>
            </div>
            <div class="mb-4">
              <label htmlFor="Adhaar" class="flex flex-col text-gray-700 text-xl font-bold mb-5">Adhaar
                <input type="text" placeholder='Enter Your Adhaar' value={adhaar} onChange={({ target }) => setAdhaar(target?.value)} required 
                class="shadow appearance-none border rounded w-auto py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-3 w-1/4"/>
              </label>
            </div>
            <div class="mb-4">
              <label htmlFor="Email" class="flex flex-col text-gray-700 text-xl font-bold mb-5">Email
                <input type="email" placeholder='Enter Your Email' value={email} onChange={({ target }) => setEmail(target?.value)} required 
                class="shadow appearance-none border rounded w-auto py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-3 w-1/4"/>
              </label>
            </div>
            <div class="mb-4">
              <label htmlFor="Password" class="flex flex-col text-gray-700 text-sm font-bold mb-5">Password
                <input type="password" placeholder='Enter Your Password' value={password} onChange={({ target }) => setPassword(target?.value)} required class="shadow appearance-none border rounded w-auto py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-3 w-1/4"/>
              </label>
            </div>
            <div class="mb-4">
              <button type='submit' class="bg-black hover:bg-gray-600 text-white hover:text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-500 ease-in-out">Register as Donor</button>
            </div>
          </form>
        </div>
      </div>

    </>
  )
}