import React,{useState} from 'react'
import EventsCard from '../cards/eventsCard'
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
const EventSection = () => {
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
        breakpoints: {
          "(max-width:500px)": {
            slides: {
              perView: 1.15,
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
     
  return (
   <>
   <main className='flex flex-col gap-6 mt-6'>
            <div className='text-2xl font-bold'>Upcoming Events</div>
            <div className="w-[100vw] 2xl:-ml-[150px]">
              <div ref={sliderRef} className="keen-slider">
                
              <div className="keen-slider__slide min-w-[184px] ">
                <EventsCard/>
              </div>
              <div className="keen-slider__slide min-w-[184px] ">
                <EventsCard/>
              </div> <div className="keen-slider__slide min-w-[184px] ">
                <EventsCard/>
              </div>
                
              </div>
            </div>
        </main>
   </>
  )
}

export default EventSection