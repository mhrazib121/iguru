import { Inter } from 'next/font/google';
import HomeTopBanner from './HomeTopBanner';
import Courses from './Components/Courses';
import WhyChoose from './Components/WhyChoose/WhyChoose';
import SubscribeSection from './Components/SubscribeSection';
import BlogDiv from './Components/BlogDiv/BlogDiv';
import Discover from './Components/Discover/Discover';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div >
      <HomeTopBanner />
      <br />
      <Courses />
      <Discover />
      <WhyChoose />
      <SubscribeSection />
      <BlogDiv />
    </div>
  )
}
