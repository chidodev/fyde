import { ITask } from '@/types'
import { users } from '@/utils/data'
import { Avatar, AvatarGroup, Popover } from '@mui/material'
import React, { useState } from 'react'
import { BiCheck, BiDotsHorizontalRounded } from 'react-icons/bi'

const Task: React.FC<{ task: ITask }> = ({ task }) => {

    const [showContextMenu, setShowContextMenu] = useState(false)
    const [taskSelected, setTaskSelected] = useState(false)

    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
        setShowContextMenu(!showContextMenu)
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;


    return (
        <div onClick={() => setTaskSelected(!taskSelected)} className='w-full shadow cursor-pointer my-1 border task-shadow drop-shadow-xl rounded-xl px-3 py-2 flex items-center justify-between'>
            <div className='flex items-center'>
                <div className={`border rounded-full w-6 h-6 flex items-center`}>
                    {taskSelected && <span className='bg-[#19C093] flex items-center justify-center rounded-full w-full h-full text-white'>
                        <BiCheck className='m-auto' />
                    </span>}
                </div>
                <span className='font-semibold text-slate-800 mx-3'>{task.name}</span>
                <span className={`w-2 h-2 rounded-full ${task.status == "onhold" ? "bg-[#FF9F01]" : task.status === "progressing" ? "bg-red-500" : "bg-transparent"}`}></span>
            </div>
            <div className='flex smm20:flex w-fit relative items-center text-sm'>

                <span className='text-slate-400 mx-3'>{task.status == "progressing" ? "In Progress" : task.status == "hold" ? "On Hold" : task.status == "todo" ? "To Do" : ""}</span>
                <div className='hidden smlg:flex items-center'>
                    <span className='text-black mx-3'>{task.time}</span>
                    <AvatarGroup sx={{
                        zIndex: -1,
                    }} max={4} className=' mx-3'>
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
                <span onClick={handleClick} aria-describedby={id} className={`${showContextMenu ? "bg-blue text-white" : "bg-[#E3EAFA] text-blue "} relative rounded-xl p-[6px] cursor-pointer `}>
                    <BiDotsHorizontalRounded size={25} />
                    {showContextMenu &&
                        (
                            <Popover
                                id={id}
                                open={open}
                                anchorEl={anchorEl}
                                onClose={handleClose}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                className=''
                            >
                                <div className='flex flex-col bg-transparent '>
                                    <div className='flex justify-start bg-transparent'>
                                        <div className='border-8 border-transparent ml-[6px] bg-transparent border-b-[#001847] w-4'></div>
                                    </div>
                                    <div className='flex flex-col  rounded-lg bg-[#001847] text-white py-4'>
                                        {
                                            ["Open", "Get Link", "Clone", "Delete"].map((item, index) => (
                                                <div key={index} className={`cursor-pointer py-2 px-8 border-blue ${index != 3 && "border-b"} `}>
                                                    {item}
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                            </Popover>
                        )
                    }
                </span>
            </div>
        </div>
    )
}

export default Task