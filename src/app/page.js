import { Inter } from 'next/font/google';
import HomeTopBanner from './HomeTopBanner';
import Courses from './Components/Courses';
import WhyChoose from './Components/WhyChoose/WhyChoose';
import SubscribeSection from './Components/SubscribeSection';
import BlogDiv from './Components/BlogDiv/BlogDiv';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div >
      <HomeTopBanner />
      <br />
      <Courses />
      <WhyChoose />
      <SubscribeSection />
      <BlogDiv />
    </div>
  )
}
