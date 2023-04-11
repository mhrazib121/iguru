import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from './Components/Navbar'
import HomeTopBanner from './HomeTopBanner'
import Courses from './Components/Courses'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div >
      <Navbar />
      <HomeTopBanner />
      <Courses />
    </div>
  )
}
