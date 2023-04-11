import Image from 'next/image';
import React from 'react';
import "./Course.css"
import Link from 'next/link';

const Course = ({ item }) => {
    const { id, name, logo, total } = item;
    return (
        <div className='bg-slate-300 flex flex-col items-center relative p-8 hover-parent transition delay-150'>
            <Image width="200" height="100" src={logo} alt="course">
            </Image>
            <div className=' card-hover w-[100%] bg-[#000000] bg-opacity-30 h-[100%] absolute -mt-8 '>
                <h2 className='text-xl font-bold text-white text-center absolute m-3'>{name}</h2>
                <Link href={`/course/${id}`} className='bg-orange-600 px-4 py-2 h-[40px] m-auto rounded-lg text-slate-50'>Start Now</Link>
            </div>
        </div>
    );
};

export default Course;