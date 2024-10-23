"use client"
import { Link } from "@/i18n/routing"
import { useTranslations } from "next-intl"
import Image from "next/image"
import { useState } from "react";
import { FaCirclePlay } from "react-icons/fa6";
import { MdClose } from "react-icons/md";
const TopBanner = () => {
   const [openFilm, setOpenFilm] = useState(false)
    const bannerInfos = useTranslations('TopBanner')
    const topBanner = bannerInfos.raw('topBanner')
   
  return (
    <div className="md:shadow-md  md:shadow-[#215e0257] md:ring-1 md:ring-[#215e0257] md:rounded-lg md:px-5 xl:px-8 md:my-16 max-w-[95rem] mx-auto place-content-center place-items-center md:gap-8 grid grid-cols-1 md:grid-cols-1 xl:grid-cols-3 ">
        <div className="w-full bg-gradient-to-r from-[#f9fceb] from-10% via-[#fefee6] via-30% to-[#fcfceb] to-90%  pt-[3rem] md:py-[3.8rem]">
            <h1 className="text-3xl px-8  leading-tight tracking-tight text-[#215E02] font-extrabold text-center uppercase xl:text-[3rem]">
            {topBanner.title}
            </h1>
            <p className="mt-6 px-8 text-[#030904] text-md md:text-xl text-center  ">
            {topBanner.subtitle}

            </p>
            <div className="ml-5 px-8 mt-6">
                <ul className="text-sm md:text-[1rem] font-light  list-decimal grid grid-cols-1 md:grid-cols-2 gap-8">
                    <li className=""> Projets Santé</li>

                    {
                        topBanner.causeArray?.map((cause) => (
                      cause.id >= 2 &&   <li key={cause.id}>{cause.title}</li>
                        ))
                    }
                   
                </ul>
            </div>
            <div className="mt-[3rem] px-8 ">
                <h1 className="text-2xl md:text-[4rem] font-semibold leading-tight tracking-tight text-[#215E02]">
                    {topBanner.pourcentage}
                </h1>
               
               
                <div className="w-full bg-[#CDD720] dark:bg-neutral-600">
                    <div
                    className="bg-[#215E02] h-2 p-0.5 text-center text-xs font-medium leading-none text-primary-100"
                    style={{ width: `${topBanner.pourcentage}` }}
                    >
                  
                    </div>
                </div>
               
            </div>
              <Link href={topBanner.link}>
              <button className="bg-[#215E02] font-bold text-2xl mt-16 px-4 py-4 w-full uppercase text-[#CDD720] ">
               {topBanner.btn}
               </button>
              </Link>
        </div>
        <div className="w-full flex relative justify-center items-center h-[16.75rem] md:h-[49.25rem]">
            <Image src="/images/reading.jpg"  alt="hero" width={1000} height={1000} className="w-full h-[16.75rem] md:h-[49.25rem]  object-cover" />
            <div className=" h-[16.75rem] md:h-[49.25rem] flex justify-center  text-white items-center absolute top-0 w-full bg-black/70">
            <FaCirclePlay className=" cursor-pointer text-7xl md:text-9xl" onClick={()=>setOpenFilm(!openFilm)} />
            
            </div>
           {openFilm && <div className=" text-white  w-screen flex justify-center items-center h-screen fixed  top-0 backdrop-blur-xl bg-black/80 " onClick={()=>setOpenFilm(false)}  >
            <MdClose className=" cursor-pointer relative z-50 -top-[14rem]  md:-top-[16rem] left-[90%] text-md md:text-3xl" onClick={()=>setOpenFilm(false)} /> 
            
           <div className="w-full  h-full p-8 z-40 flex justify-center items-center">
           <iframe
                src="https://www.youtube.com/embed/rMoqAFuLIlY?si=6oZyO1tiByydgyYy"
                frameborder="0"
                allowfullscreen
                className=" w-[50rem] h-[20rem]   md:w-[50rem] md:h-[30rem] "
                />
           </div>
           </div>}
        </div>
        <div className="grid grid-cols-1  py-[3.8rem] md:py-[13rem]  md:gap-4 place-items-center">
            <Image src="/images/logo_moya.png"  alt="hero" width={500} height={500} className="w-[7.5rem] h-full  object-cover" />

            <h1 className=" text-3xl md:text-3xl xl:text-[2.5rem] text-center font-semibold leading-[8rem] tracking-tight text-[#215E02]">
            {topBanner.whyMoya}
            </h1>
            <p className="mt-0   md:mt-6 px-8 text-center text-[#030904] text-md md:text-xl">
            {topBanner.whySubtitle}
            </p>
            <Link className={ "mt-8 bg-[#CDD720] md:text-[1.5rem] transition-colors ease-linear duration-300 text-inherit py-1 px-2 rounded-lg hover:text-gray-100 hover:bg-[#225D00]"} href={'/about-us'} > {topBanner.whyBtn} </Link>
        </div>
    </div>
  )
}

export default TopBanner