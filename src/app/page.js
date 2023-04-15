import { Inter } from 'next/font/google';
import HomeTopBanner from './HomeTopBanner';
import Courses from './Components/Courses';
import WhyChoose from './Components/WhyChoose/WhyChoose';
import SubscribeSection from './Components/SubscribeSection';
import BlogDiv from './Components/BlogDiv/BlogDiv';
import Discover from './Components/Discover/Discover';
import Achievement from './Components/Achivement/Achivement';
import Testimonials from './Components/Testimonials';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div >
      <HomeTopBanner />
      <Courses />
      <Discover />
      <WhyChoose />
      <SubscribeSection />
      <BlogDiv />
      <Achievement />
      <Testimonials />
      <br />
    </div>
  )
}
