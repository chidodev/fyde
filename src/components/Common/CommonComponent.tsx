import React from 'react'
import Sidebar from '../Sidebar'
import MiddleBar from '../MiddleBar/MiddleBar'
import { BiChevronLeft } from 'react-icons/bi'
import { useApp } from '@/context/AppContext'

const CommonComponent: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const { middleBar, setMiddleBar } = useApp()

    return (
        <div className='min-h-screen bg-white w-full flex items-center justify-start'>
            <BiChevronLeft onClick={() => setMiddleBar(!middleBar)} color='blue' size={25} className={`${!middleBar && "rotate-180"} absolute top-4 left-24 cursor-pointer w-8 h-8 rounded-full flex items-center justify-center bg-blue-300`} />
            <Sidebar />
            {middleBar && <MiddleBar />}
            <div className={`shadow shadow-slate-400 ${middleBar ? "w-9/12" : "w-full"} min-h-screen`}>
                {children}
            </div>
        </div>
    )
}

export default CommonComponent