import { INavbarLink } from '@/types'
import { navbarLinks } from '@/utils/data'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

const Sidebar = () => {

  const [activeTab, setActiveTab] = useState<"home" | "tasks" | "user" | "chat" | "help">("home")

  return (
    <div className='w-20 items-center bg-white hidden md:flex flex-col py-3 justify-between shadow min-h-screen'>
      <div className='border-b-2 w-full'>
        <Image alt='Logo' src={"/logo.png"} className='m-auto' width={60} height={60} />
      </div>
      <div className='flex w-full items-center flex-col'>

        {
          navbarLinks.map((link: INavbarLink, index: number) => (
            <Link title={link.name} key={index} href={link.href} className='w-full'>
              <div className='w-full bg-[#F1F6FF]'>
                <div style={{ borderBottomRightRadius: activeTab === link.label ? "2rem" : "0" }} className='h-2 bg-white w-full'></div>
              </div>
              <div onClick={() => setActiveTab(link.label)} className={`${activeTab === link.label && "bg-[#F1F6FF]"} w-full flex py-6 justify-center items-center`}>
                <link.icon size={25} className='text-slate-700' />
              </div>
              <div className='w-full bg-[#F1F6FF]'>
                <div style={{ borderTopRightRadius: activeTab === link.label ? "2rem" : "0" }} className='h-2 bg-white w-full'></div>
              </div>
            </Link>
          ))
        }

      </div>
      <div></div>
    </div>
  )
}

export default Sidebar