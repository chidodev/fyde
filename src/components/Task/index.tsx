import { ITask } from '@/types'
import { users } from '@/utils/data'
import { Avatar, AvatarGroup } from '@mui/material'
import React, { useState } from 'react'
import { BiDotsHorizontalRounded } from 'react-icons/bi'

const Task: React.FC<{ task: ITask }> = ({ task }) => {

    const [showContextMenu, setShowContextMenu] = useState(false)

    return (
        <div className='w-full z-10 my-2 shadow-lg drop-shadow-xl rounded p-3 flex items-center justify-between'>
            <div className='flex items-center'>
                <input type="radio" name="task" />
                <span className='font-semibold text-slate-800 text-lg ml-2'>{task.name}</span>
            </div>
            <div className='flex relative items-center text-sm'>
                {showContextMenu &&
                    (<div className='flex  z-30 flex-col  rounded-lg right-1 top-8 bg-blue-950 text-white py-4 absolute'>

                        {
                            ["Open", "Get Link", "Clone", "Delete"].map((item, index) => (
                                <div key={index} className={`py-2 px-8 border-blue-700 ${index != 3 && "border-b"} `}>
                                    {item}
                                </div>
                            ))
                        }
                    </div>)
                }
                <span className='text-slate-400 mx-3'>{task.status == "progressing" ? "In Progress" : task.status == "hold" ? "On Hold" : task.status == "todo" ? "To Do" : ""}</span>
                <span className='text-black mx-3'>{task.time}</span>
                <AvatarGroup max={4} className='z-[1] mx-3'>
                    {
                        task.assignees.map((assignee: number, index: number) => {
                            const user = users.filter(user => user.id == assignee)[0]
                            return (
                                <Avatar key={index} alt={user.names} src={user.profile} />
                            )
                        })
                    }
                </AvatarGroup>
                <span onClick={() => setShowContextMenu(!showContextMenu)} className={`${showContextMenu ? "bg-blue-700 text-white" : "bg-blue-100 text-blue-700 "} z-[1] rounded-xl p-2 cursor-pointer `}>
                    <BiDotsHorizontalRounded size={25} />
                </span>
            </div>
        </div>
    )
}

export default Task