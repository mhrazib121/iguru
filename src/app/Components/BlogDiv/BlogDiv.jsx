import React, { useMemo } from 'react';
import BlogImg1 from "../../assets/Blogs/blog-02.jpg";
import BlogImg2 from "../../assets/Blogs/course-3-580x385.jpg";
import BlogImg3 from "../../assets/Blogs/post-2.jpg";
import BlogImg4 from "../../assets/Blogs/post-4.jpg";
import Image from 'next/image';
import Tittle from '../Common/Tittle';
import Link from 'next/link';

const BlogDiv = () => {
    const demoData = useMemo(() => {
        const useData = [
            {
                id: " 01",
                title: "What is Data Analytics and its Future Scope",
                describe: "In 2000 our centre became an academic department within the school of languages.",
                img: <Image src={BlogImg1} alt="Blog-Image" />,
                date: "10 Apr, 2023",
            },
            {
                id: " 02",
                title: "How to Build a Data Analyst Portfolio",
                describe: "At the end of course you will get the certificate and valuable skills and experience.",
                img: <Image src={BlogImg2} alt="Blog-Image" />,
                date: "15 Mar, 2023",
            },
            {
                id: " 03",
                title: "Entry Level Networking Certification",
                describe: "Our learning materials include text with multimedia on all areas of the curriculum.",
                img: <Image src={BlogImg3} alt="Blog-Image" />,
                date: "25 Feb, 2023",
            },
            {
                id: " 04",
                title: "SQL Certifications for Your Data Career",
                describe: "Learning a new language is a fascinating thing that can lead to great opportunities.",
                img: <Image src={BlogImg4} alt="Blog-Image" />,
                date: "8 Dec, 2022",
            },
            // {
            //     id: " 05",
            //     title: "How to increase you problem solving skill",
            //     describe: "Learning a new language is a fascinating thing that can lead to great opportunities.",
            //     img: <Image src={BlogImg4} alt="Blog-Image" />,
            //     date: "8 Dec, 2022",
            // },
        ]
        return useData;
    }, []);

    return (
        <div className='w-3/5 mt-12 mx-auto'
            data-aos="fade-zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600"
        >
            <br />
            <Tittle text="DISCOVER NEWS" />
            <h1 className='text-5xl font-bold mb-8'>Read our blogs</h1>
            <div className='md:flex   w-full gap-8  mx-auto'>
                <div className='w-full mx-auto mb-8 md:mb-0'>
                    <div className=' rounded-lg overflow-hidden'>
                        <div className=' hover:scale-125 duration-300'>
                            {demoData[0].img}
                        </div>
                    </div>

                    <p className='text-sm font-semibold mt-4'>{demoData[0].date} / 0 Comments</p>
                    <Link href="#" className='text-2xl font-semibold hover:text-orange-600 cursor-pointer' > {demoData[0].title} </Link>
                </div>
                <div className=' w-5/6'>

                    {demoData.slice(1).map((blog) => (
                        <div key={blog.id} className='flex gap-4 mb-4'>
                            <div className='w-3/6'>
                                <div className=' rounded-lg overflow-hidden'>
                                    <div className=' hover:scale-125 duration-300'>
                                        {blog.img}
                                    </div>
                                </div>

                            </div>
                            <div className='my-auto'>
                                <p className='text-[12px] font-semibold mb-2'>{blog.date} / 0 Comments</p>
                                <Link href="#" className='text-lg font-semibold hover:text-orange-600 cursor-pointer' > {blog.title} </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <br />
        </div>
    );
};

export default BlogDiv;