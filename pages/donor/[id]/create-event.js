import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'

const CreateEvent = () => {
    let router=useRouter();
  return (
    <>
    <section className='p-4 font-primary flex flex-col gap-4'>
       <div onClick={()=>{router.push(`/donor/${router.query.id}`)}} className='flex cursor-pointer max-w-max items-center gap-6 text-lg font-medium'>
        <Image 
        src={'/images/back.svg'}
        width={8}
        height={10}
        />
        Go back
       </div>
       <main className='flex flex-col gap-4 p-2'>
        <div className='flex flex-col gap-2 '>
            <div className='text-lg font-medium'>Name</div>
            <input type={'text'} className='p-2 outline-none border-[1px] border-gray-200 rounded text-lg focus:ring-white bg-gray-100' placeholder='e.g. Food donation by organization' />
        </div>
        <div className='flex flex-col gap-2 '>
            <div className='text-lg font-medium'>What quantity of food you want to donate?(For how many persons)</div>
            <input type={'text'} className='p-2 outline-none border-[1px] border-gray-200 rounded text-lg focus:ring-white bg-gray-100' placeholder='e.g. 10 persons' />
        </div>
        <div className='flex flex-col gap-2 '>
            <div className='text-lg font-medium'>
            How long can the food be consumed?
            </div>
            <select className=' bg-gray-100 border-[1px] rounded border-gray-200'>
                <option className='' selected disabled>Select option</option>
                <option className='' >24 hours</option>
                <option className='' >48 hours</option>
                <option className='' >More than 3 days</option>
                <option className='' >A week</option>
            </select>
        </div>
        <div className='flex flex-col gap-2 '>
            <div className='text-lg font-medium'>Choose Date n Time</div>
            <input type={'datetime-local'} className='p-2 w-full outline-none border-[1px] border-gray-200 rounded text-lg focus:ring-white bg-gray-100' />
        </div>
        <button type="button" class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded text-base px-5 py-2.5 text-center mr-2 mb-2">Create Event</button>

       </main>
    </section>
    </>
  )
}

export default CreateEvent