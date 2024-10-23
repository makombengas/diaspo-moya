"use client"


import { useTranslations } from "next-intl";
import Image from "next/image"
import { useState } from "react";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";

export const Carousel = () => {
    const [sliderIndex, setSliderIndex] =useState(0)
    const prevSlider = () => {
        sliderIndex === 0 ? setSliderIndex(3) : setSliderIndex(sliderIndex - 1)
    }
    const nextSlider = () => {
        sliderIndex === 3 ? setSliderIndex(0) : setSliderIndex(sliderIndex + 1)
    }

    const carouselArray = useTranslations('Carousel')
    const carousel = carouselArray.raw('carousel')
  return (
    <div className="w-full h-screen relative   ">
       <IoMdArrowDropleft className=" cursor-pointer ml-2  md:ml-4 xl:ml-8 absolute bg-white/30 rounded-full top-[50%] z-10 text-[#CDD720] text-2xl left-0 md:text-5xl" onClick={prevSlider} />
       <IoMdArrowDropright className=" cursor-pointer mr-2 absolute md:mr-4 xl:mr-8 bg-white/30 rounded-full  top-[50%] z-10 text-[#CDD720] text-2xl right-0 md:text-5xl" onClick={nextSlider} />
        {
            carousel.map(item =>(
                <div key={item.id} className={`"w-full h-full relative   " ${sliderIndex === item.id ? "   block" : "hidden"}`}  >
                    <Image src={item.image} alt="hero" fill className="  object-cover" />
                    <div className="w-screen top-0 flex justify-start items-center px-[2rem] md:px-[6rem] xl:px-[12rem] absolute -z-5 bg-black/70 h-screen">
                        <div className=" flex justify-center items-center md:items-start  flex-col w-full  md:max-w-[80rem] gap-6  xl:max-w-[48rem] h-full">

                            <h1 className="text-[#CDD720] text-center md:text-start animate-fade-in animate-delay-100 animate-duration-slow  text-3xl md:text-4xl   xl:text-[4rem]">
                                <span className="uppercase  font-extrabold  leading-[4rem]	 text-white"> {item.title}</span>
                                <p className="    xl:text-[2rem]   animate-fade-in animate-delay-500 animate-duration-slow   text-white text-[1.5rem] pt-[2rem] xl:mt-0 font-extralight ">
                                    {item.subtitle}
                                </p>
                            </h1>
                            <button className=" animate-fade-in animate-delay-1000 animate-duration-slow   text-[.7rem] md:text-[1rem] mt-5 xl:mt-0 max-w-[8rem] md:max-w-[12rem] bg-[#CDD720] text-black py-2 px-4 rounded-lg"> {item.btn} </button>

                        </div>
                    </div>
                </div>
            ) )
        }

        <div className="absolute flex gap-3 md:gap-6 top-[89%] left-[50%] translate-x-[-50%]">
            {
                carousel.map(item =>(
                    <div key={item.id} className=" cursor-pointer w-[3rem] h-[3rem] hover:scale-110 transition-all ease-in-out duration-300  md:w-[4rem] md:h-[4rem] rounded-full  relative" onClick={() => setSliderIndex(item.id)} >
                        <Image src={item.image} alt="hero" width={100} height={100} className="w-[3rem] h-[3rem]  md:w-[4rem] md:h-[4rem] rounded-full   object-cover" />
                        <div key={item.id} className={`  ${sliderIndex === item.id ? " transition-all ease-in-out duration-300 scale-125 border-[#CDD720] border-4 absolute  top-[0%] left-[50%] translate-x-[-50%] cursor-pointer  w-[3rem] h-[3rem]  md:w-[4rem] md:h-[4rem] rounded-full bg-black/20" : " absolute  top-[0%] left-[50%] translate-x-[-50%] cursor-pointer border-2 border-[#fff]  w-[3rem] h-[3rem]  md:w-[4rem] md:h-[4rem] rounded-full bg-black/60"}`	} >
                        </div>
                    </div>
                ))
            }
        </div>

    </div>
  )
}
