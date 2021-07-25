import Head from 'next/head'
import { Sidebar } from './components/Sidebar'
import Details from './Details'

export default function Home() {
  return (
    <div className="font:roboto">
      <Head>
        <title>HelpDefeatCorona.org</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className="flex">
        <Sidebar></Sidebar>
        <Details></Details>
      </div>
      
    </div>
  )
}
