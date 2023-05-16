import CommonComponent from '@/components/Common/CommonComponent'
import Navbar from '@/components/Navbar'
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
      </main>
    </CommonComponent>
  )
}
