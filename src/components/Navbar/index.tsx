import { useApp } from '@/context/AppContext'
import Image from 'next/image'
import React from 'react'
import { BiCheck, BiChevronDown, BiChevronLeft, BiPause, BiSearch } from 'react-icons/bi'

const Navbar = () => {
  const { middleBar, setMiddleBar } = useApp()

  return (
    <div className='w-full flex justify-between items-center'>
      {!middleBar && <BiChevronLeft onClick={() => setMiddleBar(!middleBar)} color='blue' size={25} className={`${!middleBar && "rotate-180"} cursor-pointer w-8 h-8 rounded-full hidden xl:flex items-center justify-center bg-[#E3EAFA]`} />}
      <div className='flex text-slate-400 items-center'>
        <BiSearch size={25} className='mr-2' />
        <input type="text" className='outline-none text-black' placeholder='Search in CRM...' />
      </div>
      <div className='flex items-center'>
        <div className='cursor-pointer mx-3 h-12 hidden smlg:flex items-center'>
          <span className='w-12  h-full bg-blue flex rounded-full items-center justify-center text-white cursor-pointer'>
            <BiPause size={30} color='white' />
          </span>
          <span className='ml-2 h-full flex items-center justify-center rounded-lg text-2xl px-4 bg-slate-200 text-black'>4: 26</span>
        </div>
        <div className='cursor-pointer mx-3 h-12 hidden smlg:flex items-center'>
          <span className='w-12  h-full bg-[#19C093] flex rounded-full items-center justify-center text-white cursor-pointer'>
            <BiCheck size={30} color='white' />
          </span>
          <div className='mx-1 flex items-center'>
            <div className='flex flex-col'>
              <span>Project CRM</span>
              <span className='font-bold text-blue'>Task: #78</span>
            </div>
            <BiChevronDown size={25} />
          </div>
        </div>
        <div className='mx-3 cursor-pointer h-12 flex items-center'>
          <Image alt="" width={48} height={48} className='w-12 h-full flex rounded-full items-center justify-center text-white cursor-pointer' src='https://picsum.photos/250/250' />
          <div className='mx-1 flex items-center'>
            <div className='flex flex-col'>
              <span>User</span>
              <span className='font-bold'>Kolin F.</span>
            </div>
            <BiChevronDown size={25} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar