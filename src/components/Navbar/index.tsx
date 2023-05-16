import React from 'react'
import { BiPause, BiSearch } from 'react-icons/bi'

const Navbar = () => {
  return (
    <div className='w-full flex justify-between items-center'>
      <div className='flex text-slate-400 items-center'>
        <BiSearch size={25} className='mr-2' />
        <input type="text" className='outline-none text-black' placeholder='Search in CRM...' />
      </div>
      <div className='flex items-center'>
        <div className='mx-2 h-12 flex items-center'>
          <span className='w-12  h-full bg-blue-700 flex rounded-full items-center justify-center text-white cursor-pointer'>
            <BiPause size={30} color='white' />
          </span>
          <span className='ml-2 h-full flex items-center justify-center rounded-lg text-2xl px-4 bg-slate-200 text-black'>{(new Date()).getHours()}:{(new Date()).getMinutes()}</span>
        </div>
      </div>
    </div>
  )
}

export default Navbar