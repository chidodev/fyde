import { ITask } from '@/types'
import { users } from '@/utils/data'
import { Avatar, AvatarGroup } from '@mui/material'
import React, { useState } from 'react'
import { BiCheck, BiDotsHorizontalRounded } from 'react-icons/bi'

const Task: React.FC<{ task: ITask }> = ({ task }) => {

    const [showContextMenu, setShowContextMenu] = useState(false)
    const [taskSelected, setTaskSelected] = useState(false)
    return (
        <div onClick={() => setTaskSelected(!taskSelected)} className='w-full z-10 shadow cursor-pointer my-1 border task-shadow drop-shadow-xl rounded-xl px-3 py-2 flex items-center justify-between'>
            <div className='flex items-center'>
                <div className={`border rounded-full w-6 h-6 flex items-center`}>
                    {taskSelected && <span className='bg-[#19C093] flex items-center justify-center rounded-full w-full h-full text-white'>
                        <BiCheck className='m-auto' />
                    </span>}
                </div>
                <span className='font-semibold text-slate-800 mx-3'>{task.name}</span>
                <span className={`w-2 h-2 rounded-full ${task.status == "onhold" ? "bg-[#FF9F01]" : task.status === "progressing" ? "bg-red-500" : "bg-transparent"}`}></span>
            </div>
            <div className='hidden smm20:flex w-fit relative items-center text-sm'>

                <span className='text-slate-400 mx-3'>{task.status == "progressing" ? "In Progress" : task.status == "hold" ? "On Hold" : task.status == "todo" ? "To Do" : ""}</span>
                <div className='hidden smlg:flex items-center'>
                    <span className='text-black mx-3'>{task.time}</span>
                    <AvatarGroup max={4} className=' mx-3'>
                        {
                            task.assignees.map((assignee: number, index: number) => {
                                const user = users.filter(user => user.id == assignee)[0]
                                return (
                                    <Avatar key={index} alt={user.names} src={user.profile} />
                                )
                            })
                        }
                    </AvatarGroup>
                </div>
                <span onClick={() => setShowContextMenu(!showContextMenu)} className={`${showContextMenu ? "bg-blue text-white" : "bg-[#E3EAFA] text-blue "} relative z-[1] rounded-xl p-[6px] cursor-pointer `}>
                    <BiDotsHorizontalRounded size={25} />
                    {showContextMenu &&
                        (
                            <div className='hidden flex-col absolute right-1 top-8'>
                                <div className='flex justify-end'>
                                    <div className='border-8 border-transparent mr-[6px] bg-transparent border-b-[#001847] w-4'></div>
                                </div>
                                <div className='flex flex-col  rounded-lg bg-[#001847] text-white py-4'>
                                    {
                                        ["Open", "Get Link", "Clone", "Delete"].map((item, index) => (
                                            <div key={index} className={`py-2 px-8 border-blue ${index != 3 && "border-b"} `}>
                                                {item}
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        )
                    }
                </span>
            </div>
        </div>
    )
}

export default Task