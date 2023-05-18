import React from 'react'
import Sidebar from '../Sidebar'
import MiddleBar from '../MiddleBar/MiddleBar'
import { BiChevronLeft } from 'react-icons/bi'
import { useApp } from '@/context/AppContext'

const CommonComponent: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const { middleBar } = useApp()

    return (
        <div className='min-h-screen bg-white w-full flex items-start justify-start'>
            <Sidebar />
            {middleBar && <MiddleBar />}
            <div className={`shadow shadow-slate-400 ${middleBar ? "w-full xl:w-9/12" : "w-full px-3"} h-screen overflow-y-scroll`}>
                {children}
            </div>
        </div>
    )
}

export default CommonComponent 