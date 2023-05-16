import CommonComponent from '@/components/Common/CommonComponent'
import Navbar from '@/components/Navbar'
import { navigation, statistics } from '@/utils/data'
import { Inter } from 'next/font/google'
import Head from 'next/head'

export default function Home() {
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
                    <span className={`bg-${data.labelColor} rounded p-1 h-fit text-white absolute right-1 top-1`}>{data.label}</span>
                    <span className='text-slate-500'>{data.name}</span>
                    <span className='flex my-3 justify-end items-end'>
                      <span className='text-2xl text-slate-900'>{data.value}</span>
                      <span className='text-slate-600 text-sm'>( {data.value} )</span>
                    </span>
                  </div>
                ))
              }
            </div>
          </div>
          <div className='w-2/5 min-h-[calc(100vh_-_15vh)] mt-3 bg-slate-600'></div>
        </div>
      </main>
    </CommonComponent>
  )
}
