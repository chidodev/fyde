import CommonComponent from '@/components/Common/CommonComponent'
import Navbar from '@/components/Navbar'
import Task from '@/components/Task'
import { useApp } from '@/context/AppContext'
import { navigation, statistics, tasks, users } from '@/utils/data'
import { Avatar, AvatarGroup, useRadioGroup } from '@mui/material'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { BiCheck, BiChevronDown, BiChevronRight, BiDotsHorizontal, BiDotsHorizontalRounded, BiPause, BiPlus } from 'react-icons/bi'
import { BsListUl } from 'react-icons/bs'
import { CgViewComfortable } from 'react-icons/cg'
import { TiAttachment } from 'react-icons/ti'

export default function Home() {

  const [activeDisplayTab, setActiveDisplayTab] = useState("flex")
  const { rightBar, setRightBar, middleBar } = useApp()
  return (
    <CommonComponent>
      <main className="flex w-full flex-col px-4 pr-0 p-2 min-h-screen">
        <Head>
          <title>Project CRM</title>
        </Head>
        <Navbar />
        <div className='w-full flex justify-around'>
          <div className={`${rightBar ? "w-full plg:w-[65%]" : "w-full plg:w-11/12"} min-h-[calc(100vh_-_15vh)] mt-2 px-4 flex flex-col`}>
            <div className='flex items-center justify-between py-6 border-b border-slate-400'>
              <div className='w-fit flex items-center'>
                {
                  navigation.map((navigation, index) => (
                    <div className={` mx-2 rounded-full smm20:rounded-xl bg-slate-200 p-4 smm20:p-0 smm20:px-3 smm20:py-2 flex items-center justify-center`} key={index}>
                      <navigation.icon size={20} className='text-blue smm20:mr-3' />
                      <span className='smm20:flex hidden'>{navigation.name}</span>
                    </div>
                  ))
                }
              </div>
              {!rightBar && <button onClick={() => setRightBar(true)} className='text-blue-600 border-2 rounded-3xl cursor-pointer p-2 hidden lg:flex'>
                <span>Show Window</span>
                <BiChevronRight size={20} />
              </button>}
            </div>
            <div className='flex w-full md:flex-row flex-col justify-between items-center py-4'>
              {
                statistics.map((data, index) => (
                  <div key={index} className='w-full md:my-0 my-2 md:w-4/12 p-4 mx-2 rounded-2xl relative  bg-slate-100 flex  flex-col items-start'>
                    <span style={{ background: data.labelColor }} className={`flex md:hidden lg:flex rounded-lg p-1 h-6 w-6 items-center justify-center leading-[2px] text-white absolute right-2 top-2`}>{data.label}</span>
                    <span className='text-slate-500'>{data.name}</span>
                    <span className='flex my-3 justify-end items-end'>
                      <span className='text-2xl text-slate-900 mr-2'>{data.value}</span>
                      <span className='text-slate-600 text-sm mb-1'>({data.value})</span>
                    </span>
                  </div>
                ))
              }
            </div>
            <div className='flex w-full flex-col'>
              <div className='w-full my-2 flex items-center justify-between'>
                <div className='flex items-center sm:justify-start justify-between'>
                  <span className='text-2xl font-light'>Tasks List</span>
                  <span className='cursor-pointer mx-6 bg-blue rounded-full p-3 text-white'>
                    <BiPlus size={25} />
                  </span>
                  <div className='mx-4 hidden md:flex'>
                    <AvatarGroup max={4}>
                      {
                        users.slice(0, 4).map((user, index) => (
                          <Avatar key={index} alt={user.names} src={user.profile} />
                        ))
                      }
                    </AvatarGroup>
                  </div>
                  <span className=' hidden sm:flex text-slate-500 mx-4'>200 elements</span>
                </div>
                <div className='flex border-l border-slate-400 pl-4 items-center'>
                  <div className='flex mx-2 items-center '>
                    <span onClick={() => setActiveDisplayTab("grid")} className={`p-2 shadow-slate-200 rounded shadow ${activeDisplayTab == "grid" ? "bg-white text-blue-500" : "text-slate-500"} flex items-center justify-center`}><CgViewComfortable size={25} className='' /></span>
                  </div>
                  <div className='flex ml-2 items-center border-l bordr-slate-400'>
                    <span onClick={() => setActiveDisplayTab("flex")} className={`p-2 shadow-slate-200 rounded shadow ${activeDisplayTab == "flex" ? "bg-white text-blue-500" : "text-slate-500"} flex items-center justify-center`}><BsListUl size={25} className='' /></span>
                  </div>
                </div>
              </div>
              <div className='flex flex-col'>
                <div className="w-full p-3 mb-2 h-[45vh] border-b-2 overflow-y-scroll flex justify-between flex-col">
                  {
                    tasks.map((task, index) => (
                      <Task task={task} key={index} />
                    ))
                  }
                </div>
                <div className='w-full flex items-center '>
                  <Task task={{
                    assignees: [1, 2],
                    name: "Adaptation view for admin panel",
                    status: "done",
                    time: "01: 23"
                  }} />
                </div>
                <span className='text-slate-500 text-center mt-6 text-sm'>&copy; Ottundo, 2020 Do you <Link href="#" className='text-blue'>need help?</Link></span>
              </div>
            </div>
          </div>
          {rightBar && <div className='w-[35%] py-4 px-8 m-auto min-h-[calc(100vh_-_15vh)] mt-3 hidden lg:flex flex-col'>
            <div className='w-full flex my-2 justify-between items-center'>
              <span className='font-bold text-xl'>Time Tracking</span>
              <button onClick={() => setRightBar(false)} className='text-blue-600 border-2 rounded-3xl cursor-pointer p-2 flex'>
                <span>Hide Window</span>
                <BiChevronRight className='' size={20} />
              </button>
            </div>
            <div className='w-full py-2 px-3 bg-slate-200 items-center rounded-xl flex flex-col'>
              <div className='w-full flex'>
                <div className='bg-[#FF9F01] text-white p-2 text-xs rounded-2xl'>
                  TIMER IS ON
                </div>
              </div>
              <span className='text-center text-slate-600'>Task: #78</span>
              <span className='font-bold my-3 text-[#001847]'>Create project with all tabs</span>
              <span className='font-light text-xl'>01:34</span>
              <div className='flex border p-2 border-slate-500 rounded-3xl items-center'>
                <div className='cursor-pointer border rounded-xl mx-3 h-8 flex items-center'>
                  <span className='w-8  h-full bg-blue flex rounded-full items-center justify-center text-white cursor-pointer'>
                    <BiPause size={30} color='white' />
                  </span>
                  <span className='ml-2 h-full flex items-center justify-center rounded-lg text-blue'>Pause</span>
                </div>
                <span className='text-2xl text-slate-600'>|</span>
                <div className='cursor-pointer mx-3 h-8 flex flex-row-reverse items-center'>
                  <span className='w-8  h-full bg-[#19C093] flex rounded-full items-center justify-center text-white cursor-pointer'>
                    <BiCheck size={30} color='white' />
                  </span>
                  <span className='mr-2 h-full flex items-center justify-center rounded-lg text-[#19C093]'>Complete</span>
                </div>
              </div>
            </div>
            <div className='w-full flex items-center py-4 border-b justify-between'>
              <span className="font-bold text-lg text-[#001847]">Task Description</span>
              <span className={`bg-[#E3EAFA]  rounded-xl p-[4px] cursor-pointer `}>
                <BiDotsHorizontalRounded size={25} />
              </span>
            </div>
            <div className='flex py-2 w-full  justify-between rounded-3xl items-center'>
              <div className='cursor-pointer rounded-xl mr-3 w-1/2 h-10 flex items-center'>
                <Image width={40} height={40} alt={""} src="https://picsum.photos/500/500" className='w-10  h-full bg-blue flex rounded-full items-center justify-center text-white cursor-pointer' />
                <div className='flex flex-col ml-2 h-full items-start'>
                  <span className='h-full flex items-center justify-center text-sm text-slate-500'>Contractor</span>
                  <span className='h-full flex items-center justify-center text-[#001847] font-semibold'>Kolin F.</span>
                </div>
              </div>
              <span className='text-4xl text-slate-300'>|</span>
              <div className='cursor-pointer ml-3 w-1/2 h-10 flex flex-row-reverse items-center'>
                <Image width={40} height={40} alt={""} src="https://picsum.photos/500/500" className='w-10  h-full bg-blue flex rounded-full items-center justify-center text-white cursor-pointer' />
                <div className='flex flex-col mr-2 h-full items-end'>
                  <span className='h-full flex items-center justify-center text-sm text-slate-500'>Author</span>
                  <span className='h-full flex items-center justify-center text-[#001847] font-semibold'>Nikolas P.</span>
                </div>
              </div>
            </div>
            <div className='w-full bg-slate-200 p-4 mt-2 rounded-lg flex flex-col'>
              <div className='w-full flex items-center justify-between'>
                <button className='bg-blue flex items-center rounded-lg justify-between text-white px-4 py-2 roundd cursor-pointer'>
                  <span>In Progress</span>
                  <BiChevronDown color='white' className='ml-2' size={20} />
                </button>
                <span className='text-[#001847] relative text-center flex items-center h-fit'>
                  <span className="font-extrabold -top-[18px] text-4xl mb-3 absolute">.</span>
                  <span className='ml-4 plg:flex hidden'>
                    Normal Priority
                  </span>
                </span>
              </div>
              <span className='w-full mt-2 text-[#001847]'>
                Create page with bootstrap 12 grid, you can use figma our project
              </span>
              <Image src={"https://picsum.photos/600/270"} height={270} className='bg-blue object-cover rounded-2xl my-3' width={400} alt={''} />
              <button className='bg-[#bac7e3] flex w-fit px-4 rounded-lg cursor-pointer py-1 text-blue'>
                <TiAttachment size={25} />
                <span className='ml-1 font-bold'>Attach File</span>
              </button>
            </div>
            <div className='w-full mt-8 flex justify-between'>
              <div className='flex flex-col text-xs text-slate-400'>
                <span>Created: 23 July 2020 at 8:23 pm</span>
                <span>Updated: 24 July 2020 at 6:12 pm</span>
              </div>
              <button className='text-blue-600 border-2 border-red-500 text-red-600 rounded-3xl cursor-pointer px-2 py-1 flex'>
                <span>Delete Task</span>
              </button>
            </div>
          </div>}
        </div>
      </main>
    </CommonComponent>
  )
}
