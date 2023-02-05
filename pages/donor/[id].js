import Image from 'next/image'
import React,{useState} from 'react'
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import CarouselCard from '@/components/cards/carouselCard';
import EventsCard from '@/components/cards/eventsCard';
import EventSection from '@/components/events';
const Donor = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [sliderRef, instanceRef] = useKeenSlider({
        initial: 0,
        slideChanged(slider) {
          setCurrentSlide(slider.track.details.rel);
        },
        created() {
          setLoaded(true);
        },
        mode: "free-snap",
        slides: {
          perView: 3.5,
          spacing: 10,
        },
        breakpoints: {
          "(max-width:500px)": {
            slides: {
              perView: 1.45,
              spacing: 10,
            },
          },
          "(min-width:768px)": {
            slides: {
              perView: 2.5,
              spacing: 15,
            },
          },
          "(min-width:1024px)": {
            slides: {
              perView: 3.5,
              spacing: 15,
            },
          },
          "(min-width:1439px)": {
            slides: {
              perView: 3.5,
              spacing: 15,
            },
          },
          "(min-width:1600px)": {
            slides: {
              perView: 4.5,
              spacing: 15,
            },
          },
        },
      });
     
      let services=[
        "/images/1.jpg",
        "/images/2.jpg",
        "/images/3.jpg",
    
    ]
  return (
    <>
    <section className='p-4 flex font-primary flex-col gap-2'>
        <main className='flex items-center justify-between'>
            <div className='flex flex-col gap-1'>
                <div className='text-3xl font-medium'>Welcome</div>
                <div className='text-xl font-medium'>John Doe</div>
            </div>
         <button type="button" class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Donate</button>
        </main>
        <hr className='h-[2px] bg-gray-500/20'/>
        <div className='text-base py-4 '>
        We thank you for your contribution towards eradicating hunger and reducing your carbon footprint resulting in a better future.
        </div>
        <Image 
        src={'/images/green.png'}
        width={82}
        height={82}
        />
        <main className='flex flex-col gap-6 mt-6'>
            <div className='text-2xl font-bold'>Food Banks Near You</div>
            <div className="w-[100vw] 2xl:-ml-[150px]">
              <div ref={sliderRef} className="keen-slider">
                
                {services.map((item,index)=> <div key={index} className="keen-slider__slide min-w-[184px] ">
                  <CarouselCard  img={item} />
                </div>)}
              </div>
            </div>
        </main>
        <EventSection/>
        <main className='flex flex-col gap-6 mt-6'>
            <div className='text-2xl font-bold'>Your Reviews</div>
            
            </main>
        </section>
    </>
  )
}

export default Donor