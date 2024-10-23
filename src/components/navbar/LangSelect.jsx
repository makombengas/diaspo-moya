"use client"

import { usePathname, useRouter } from "@/i18n/routing";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useState, useTransition } from "react";
import { FaLanguage } from "react-icons/fa";


const flags =[

    {
        id: 0,
        flag: 'en',
        name: 'English',
        image: '/images/england.png'
    },
    {
        id: 1,
        flag: 'de',
        name: 'Deutsch',
        image: '/images/germany.png'
    },
    {
        id: 2,
        flag: 'fr',
        name: 'Français',
        image: '/images/france.png'
    }
]
const LangSelect = () => {
    const [changeFlag, setChangeFlag] = useState(null);
    const [openFlag, setOpenFlag] = useState(false);
    const locale = useLocale();
    const router = useRouter();
    const [isPending, startTransition] = useTransition();
    const pathname = usePathname();
    const params = useParams();

    const changeLocale = (id, event) => {
        
        const nextLocale = locale === flags[id]  ? flags[0].flag : flags[id].flag;
        const newLocale = flags.filter(flag => flag.id === id)

        startTransition(() => {
            router.replace({ pathname, params }, { locale: nextLocale, scroll: false });
          });

        setChangeFlag(newLocale)
        setOpenFlag(false)
        
        
    }
 const langChange = useTranslations('LocaleSwitcher')

  return (
    <div className="group cursor-pointer z-50 ">
        <div className="bg-white px-3 py-0 rounded-md absolute top-1   items-center right-0   md:right-5 flex flex-col ">
       {openFlag? <div className=" ">
        {
            changeFlag.map((flag) => (
                <div className={` opacity-50 border-2 border-[#CDD720] ${flag.id  ? "opacity-50 border-2 border-[#CDD720] " : ""} `} key={flag.id} disabled={isPending} onClick={() => changeLocale(flag.id)}><Image className="opacity-50 border-2 border-[#CDD720]" src={flag.image} width={35} height={35} alt={flag.name} /></div>  // <div className=""></div>
            ))
        }
       </div> : <div className="flex items-center gap-3">
          <span className="  text-[.65rem] md:text-[1rem] ">  {langChange('label')}</span>
       <FaLanguage className="cursor-pointer text-black-500 text-2xl md:text-2xl" />
       </div> }
           <div className="flex items-center gap-4">
           {
                flags.map((flag) => (
                    <div key={flag.id} className={` hidden group-hover:flex justify-center cursor-pointer  items-center  ${locale === flag.flag  ? "scale-110 " : "opacity-50 "} `} disabled={isPending} onClick={() => changeLocale(flag.id)}>
                        <Image className=" w-6 h-6  md:w-10 md:h-10" src={flag.image} width={35} height={35} alt={flag.name} />
                    </div>
                ))
            }
           </div>
        </div>
    </div>
  )
}

export default LangSelect