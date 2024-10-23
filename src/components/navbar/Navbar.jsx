"use client"

import { Link } from "@/i18n/routing"
import { useTranslations } from "next-intl"
import Image from "next/image"
import { useSelectedLayoutSegment } from "next/navigation"

import { useEffect, useState } from "react"
import LangSelect from "./LangSelect"


const Navbar = () => {
  
    const [openNav, setOpenNav] = useState(false)
    const [openSubMenu, setOpenSubMenu] = useState(true)
    const [navColor, setNavColor] = useState(false)
    const selectedLayoutSegment = useSelectedLayoutSegment();
  const pathname = selectedLayoutSegment ? `/${selectedLayoutSegment}` : '/';
  const isActive = pathname ;
 const navArray = useTranslations('Nav')
 const nav = navArray.raw('nav')

  const handleNavColor = () => {
    if (window.scrollY > 80) {
        setNavColor(true)
    } else {
        setNavColor(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleNavColor)
  }, [])
 
  return (
    <div className={`fixed  top-0 left-0 w-full z-40  flex justify-between items-center px-4 md:px-6 xl:px-8 py-2 ${navColor ? "bg-black " : "  bg-black/60 "} `} >
        <Link href="/">
        <div className=" z-50  flex items-center gap-2">
            <Image style={{objectFit:"contain", width:"3rem", height:"3rem"}} priority  className="  md:w-[2.125rem] h-full xl:w-[3.125rem] cursor-pointer" src="/images/logo_moya.png" alt="Logo" width={50} height={50} />
            <div className={`text-white flex flex-col ${navColor ? "text-white" : "text-white"}}`} >
            <span className=" text-[.8rem]   md:text-[.65rem]  xl:text-[1rem] uppercase">Diaspo moya</span>
            <p className=" font-light text-[.3rem]  md:text-[.24rem] xl:text-[.36rem]">association des fils et filles du village moya</p>
            </div>
        </div>
        </Link>
        <div className={`  md:text-[.55rem] xl:text-[1rem]    ${openNav ? " backdrop-blur-sm absolute md:static -z-10  pt-[8rem] md:pt-0 top-[0%] left-[50%]  translate-x-[-50%] md:translate-x-0 w-screen md:w-auto h-screen md:h-auto  md:bg-transparent bg-black/80  flex flex-col md:flex-row gap-4" : " hidden md:flex items-center  md:text-[.55rem] xl:text-lg uppercase gap-4"} `} >
            {
                nav.map((item) => (
                    <div key={item.id} className=" group relative uppercase flex font-medium  flex-col justify-between items-center cursor-pointer">
                        <Link className={`hover:text-gray-300 py-[.65rem] ${isActive === item.link ? "text-gray-400" : ""}   ${navColor ? "text-black " : "text-gray-100"} text-gray-100 z-30 ${item.id === 5 ? "   hover:bg-[#CDD720] transition-colors ease-linear duration-300 hover:text-inherit py-[.25rem] px-2 rounded-lg text-gray-100 bg-[#225D00]" : "text-black"}`} href={item.link} onClick={() => setOpenNav(false)} >{item.title}</Link>
                        <hr className={`border-none static md:absolute -bottom-[16%]  ${isActive === item.link ? " w-[25%] md:w-full h-[3px] md:h-[5px] bg-[#CDD720]" : ""}`	} />
                        <div className={`absolute h-[8rem] top-0 p-4 ${item.id === 0 || item.id === 3 || item.id === 4 || item.id === 5 ? "hidden" : "hidden  group-hover:block"}`} >
                             
                             <div className={` bg-black z-40 flex justify-center items-center shadow-lg  md:bg-[#CDD720] rounded-sm py-1 px-2 relative h-screen w-full md:w-[12rem] md:h-auto -top-[8rem] md:top-[1.5rem] text-gray-800 ${openSubMenu ? " bg-black z-40 flex justify-center items-center ]  md:bg-[#CDD720] rounded-sm py-1 md:w-[12rem] px-2 relative h-screen w-screen  md:left-[2rem]  md:h-auto -top-4 md:top-[2.25rem] text-gray-800" : "hidden"} transition-transform ease-linear duration-300`	} >
                                 <span className="absolute top-[20%] text-[#CDD720] text-[.75rem] flex items-center right-4 md:hidden" onClick={() => setOpenSubMenu(false)} >  Back {"<"} </span>
                                
                                    <div className="  flex justify-start items-center ">
                                            {
                                                item.navArray.map((item) => (
                                                    <Link key={item.id} className=" text-[.95rem] text-gray-100 md:text-gray-800" href={item.link} onClick={() => setOpenNav(false)} >{item.title}</Link>
                                                ))
                                            }
                                    </div>
                        
                             </div>
                            
                        </div>
                    </div>
                ))
            }
        </div>
        <LangSelect />


        <div className="w-[1.5rem] z-50 flex flex-col gap-1 relative md:hidden" onClick={() => setOpenNav(!openNav)} >
            <hr className={` border-none w-full h-[2px] bg-gray-100 ${openNav ? "transition-rotate ease-linear duration-300 rotate-45 border-none w-full h-[2px] bg-black" : "transition-rotate ease-linear duration-300 "} `} />
            <hr className={` border-none w-full h-[2px] bg-gray-100 ${openNav ? " transition-opacity ease-linear duration-300 opacity-0 border-none w-full h-[2px] bg-black" : "transition-opacity ease-linear duration-300 "} `} />
            <hr className={` border-none w-full h-[2px] bg-gray-100 ${openNav ? "transition-rotate ease-linear duration-300  absolute -rotate-45 border-none w-full h-[2px] bg-black" : "transition-rotate ease-linear duration-300 "} `} />
        </div>
        
    </div>
  )
}

export default Navbar