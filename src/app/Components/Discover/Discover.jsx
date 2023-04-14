import React from 'react';
import bgDot from "../../assets/bg-dot.png";
import Image from 'next/image';

const Discover = () => {
    return (
        <div className=' lg:w-4/5 p-4 mx-auto'>
            <div className=' relative p-8 bg-black rounded-lg'>
                <Image className='absolute top-0 left-0' src={bgDot} alt='background' />
                <div className='md:flex justify-between'>
                    <h2 className='text-white text-xl font-bold mb-4 md:mb-0'>We’ve Best Mentors in Every Courses</h2>
                    <button className='uppercase bg-yellow-500 text-sm px-4 py-2 rounded-lg hover:scale-105 duration-300'>Discover more </button>
                </div>
            </div>
        </div>
    );
};

export default Discover;