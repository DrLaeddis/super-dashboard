import Head from 'next/head'
import AdminDashboard from './adminPage/dashboard'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AdminDashboard />
    </div>
  )
}
