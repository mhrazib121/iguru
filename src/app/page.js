import { Inter } from 'next/font/google';
import HomeTopBanner from './HomeTopBanner';
import Courses from './Components/Courses';
import WhyChoose from './Components/WhyChoose/WhyChoose';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div >
      <HomeTopBanner />
      <Courses />
      <WhyChoose />
    </div>
  )
}
