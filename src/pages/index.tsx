import CommonComponent from '@/components/Common/CommonComponent'
import Navbar from '@/components/Navbar'
import Task from '@/components/Task'
import { navigation, statistics, tasks, users } from '@/utils/data'
import { Avatar, AvatarGroup, useRadioGroup } from '@mui/material'
import Head from 'next/head'
import { useState } from 'react'
import { BiDotsHorizontal, BiDotsHorizontalRounded, BiPlus } from 'react-icons/bi'
import { BsListUl } from 'react-icons/bs'
import { CgViewComfortable } from 'react-icons/cg'

export default function Home() {

  const [activeDisplayTab, setActiveDisplayTab] = useState("flex")

  return (
    <CommonComponent>
      <main className="flex w-full flex-col p-10 min-h-screen">
        <Head>
          <title>Project CRM</title>
        </Head>
        <Navbar />
        <div className='w-full flex justify-around'>
          <div className='w-3/5 min-h-[calc(100vh_-_15vh)] mt-3 flex flex-col'>
            <div className='flex items-center py-6 border-b border-slate-400'>
              {
                navigation.map((navigation, index) => (
                  <div className={` mx-2 rounded-xl bg-slate-200 px-3 py-2 flex items-center justify-center`} key={index}>
                    <navigation.icon size={20} className='text-blue-700 mr-3' />
                    <span>{navigation.name}</span>
                  </div>
                ))
              }
            </div>
            <div className='flex w-full justify-between items-center py-4'>
              {
                statistics.map((data, index) => (
                  <div key={index} className='w-4/12 p-4 mx-2 rounded-2xl relative  bg-slate-100 flex flex-col items-start'>
                    <span className={`bg-${data.labelColor} rounded p-1 h-6 w-6 flex items-center justify-center leading-[2px] text-white absolute right-1 top-1`}>{data.label}</span>
                    <span className='text-slate-500'>{data.name}</span>
                    <span className='flex my-3 justify-end items-end'>
                      <span className='text-2xl text-slate-900'>{data.value}</span>
                      <span className='text-slate-600 text-sm'>({data.value})</span>
                    </span>
                  </div>
                ))
              }
            </div>
            <div className='flex flex-col'>
              <div className='w-full my-3 flex items-center justify-between'>
                <div className='flex items-center'>
                  <span className='text-2xl font-light'>Tasks List</span>
                  <span className='cursor-pointer mx-6 bg-blue-700 rounded-full p-3 text-white'>
                    <BiPlus size={25} />
                  </span>
                  <div className='mx-4'>
                    <AvatarGroup max={4}>
                      {
                        users.map((user, index) => (
                          <Avatar key={index} alt={user.names} src={user.profile} />
                        ))
                      }
                    </AvatarGroup>
                  </div>
                  <span className='text-slate-500 mx-4'>200 items</span>
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
              <div className="w-full h-[52vh] overflow-y-scroll flex flex-col">
                {
                  tasks.map((task, index) => (
                    <Task task={task} key={index} />
                  ))
                }
              </div>
            </div>
          </div>
          <div className='w-2/5 min-h-[calc(100vh_-_15vh)] mt-3  flex flex-col'>

          </div>
        </div>
      </main>
    </CommonComponent>
  )
}
