import CommonComponent from '@/components/Common/CommonComponent'
import { Inter } from 'next/font/google'
import Head from 'next/head'

export default function Home() {
  return (
    <CommonComponent>
      <main className="flex w-full flex-col items-center justify-between p-24">
        <Head>
          <title>Project CRM</title>
        </Head>
      </main>
    </CommonComponent>
  )
}
