import React from 'react'

const EventsCard = () => {
  return (
    <>
    <main className='bg-gray-100 min-w-[280px] max-w-[300px] mx-2 w-full rounded flex flex-col gap-3 p-4'>
        <div className="flex gap-2 items-center">

       <div className='text-lg font-semibold'>Donation</div>
       <div className='text-xs rounded font-bold bg-pink-600 text-white max-w-max p-1'>
        Food donation
       </div>
        </div>
       <div className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, quidem.</div>
      <div className="flex flex-col gap-1">

       <div className="text-base ">Location: Near Mg Road Metro</div>
       <div className="flex justify-between items-center font-semibold">

       <div className='text-base '>
        Date : 12/01/2023 
       </div>
       <div className='text-base '>
        Time: 5:00 PM
       </div>
      </div>
       </div>
    </main>
    </>
  )
}

export default EventsCard