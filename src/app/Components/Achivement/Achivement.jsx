import React from 'react'
import { SlGraduation } from 'react-icons/sl'
import { FiVideo } from 'react-icons/fi'
import { SlPeople } from 'react-icons/sl'
import Image from 'next/image';
import Person from "../../assets/achievement.png"
import Tittle from '../Common/Tittle';

const Achievement = () => {
    return (
        <div className='md:w-3/5 mx-auto md:px-8 py-24'>
            <div className='md:max-w-[1480px] mx-auto grid md:grid-cols-2 max-w-[600px]  px-4 md:px-0'>

                <div className='flex w-full flex-col justify-center '>
                    <Tittle text="Our Achievement" />
                    <p className='mt-2 text-lg '>Various versions have evolved over the years, sometimes by accident.</p>

                    <div className='grid grid-cols-2 py-16'>
                        <div className='py-6 flex'>
                            <div className='p-4 bg-[#E9F8F3] rounded-xl'>
                                <SlGraduation
                                    size={30}
                                    style={{ color: '#1A906B' }}
                                />
                            </div>
                            <div className='px-3'>
                                <h1 className='text-3xl font-semibold'>300</h1>
                                <p className='text-[#6D737A]'>Instructor</p>
                            </div>

                        </div>
                        <div className='py-6 flex'>
                            <div className='p-4 bg-[#FFFAF5] rounded-xl'>
                                <FiVideo
                                    size={30}
                                    style={{ color: '#FFC27A' }}
                                />
                            </div>
                            <div className='px-3'>
                                <h1 className='text-3xl font-semibold'>10,000+</h1>
                                <p className='text-[#6D737A]'>Video</p>
                            </div>

                        </div>
                        <div className='py-6 flex'>
                            <div className='p-4 bg-[#FFEEF0] rounded-xl'>
                                <SlGraduation
                                    size={30}
                                    style={{ color: '#ED4459' }}
                                />
                            </div>
                            <div className='px-3'>
                                <h1 className='text-3xl font-semibold'>20,000+</h1>
                                <p className='text-[#6D737A]'>Student</p>
                            </div>

                        </div>
                        <div className='py-6 flex'>
                            <div className='p-4 bg-[#F0F7FF] rounded-xl'>
                                <SlPeople
                                    size={30}
                                    style={{ color: '#0075FD' }}
                                />
                            </div>
                            <div className='px-3'>
                                <h1 className='text-3xl font-semibold'>1,00,000+</h1>
                                <p className='text-[#6D737A]'>Users</p>
                            </div>

                        </div>

                    </div>
                </div>


                <Image src={Person} className="m-auto md:order-last w-2/3 order-first" alt='person' />




            </div>


        </div>
    )
}

export default Achievement