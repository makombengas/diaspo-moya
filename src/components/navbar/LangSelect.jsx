"use client"

import { usePathname, useRouter } from "@/i18n/routing";
import { useLocale } from "next-intl";
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


  return (
    <div className="group">
        <div className=" absolute top-5  items-center  md:top-2 right-0 mr-16 md:mr-8 flex flex-col gap-2">
       {openFlag? <div className="">
        {
            changeFlag.map((flag) => (
                <div className={` opacity-50 border-2 border-[#CDD720] ${flag.id  ? "opacity-50 border-2 border-[#CDD720] " : ""} `} key={flag.id} disabled={isPending} onClick={() => changeLocale(flag.id)}><Image className="opacity-50 border-2 border-[#CDD720]" src={flag.image} width={35} height={35} alt={flag.name} /></div>  // <div className=""></div>
            ))
        }
       </div> : <FaLanguage className="cursor-pointer text-white text-2xl md:text-5xl" />}
            {
                flags.map((flag) => (
                    <div key={flag.id} className={` hidden group-hover:flex justify-center cursor-pointer  items-center  ${locale === flag.flag  ? "scale-110 " : "opacity-50 "} `} disabled={isPending} onClick={() => changeLocale(flag.id)}>
                        <Image className=" w-4 h-4  md:w-10 md:h-10" src={flag.image} width={35} height={35} alt={flag.name} />
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default LangSelect