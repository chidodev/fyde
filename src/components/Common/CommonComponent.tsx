import React from 'react'
import Sidebar from '../Sidebar'
import MiddleBar from '../MiddleBar/MiddleBar'

const CommonComponent: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className='min-h-screen bg-white w-full flex items-center justify-start'>
            <Sidebar />
            <MiddleBar />
            <div className='shadow shadow-slate-400 w-9/12 min-h-screen'>
                {children}
            </div>
        </div>
    )
}

export default CommonComponent