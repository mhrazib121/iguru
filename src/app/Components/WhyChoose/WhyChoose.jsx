import React, { memo, useMemo } from 'react';
import { BsStar, BsRocketTakeoff } from "react-icons/bs";
import { GiNewspaper, GiThreeFriends, } from "react-icons/gi";
import { TbCertificate } from "react-icons/tb";
import { BiLike } from "react-icons/bi";
import Image from 'next/image';
import Person from "../../assets/person-removebg-preview.png";

const WhyChoose = memo(function WhyChoose() {
    const demoData = useMemo(() => {
        const useData = [
            {
                id: " 01",
                title: "Over 20 Years of Experience",
                describe: "In 2000 our centre became an academic department within the school of languages.",
                icon: <BsStar />
            },
            {
                id: " 02",
                title: "Certification",
                describe: "At the end of course you will get the certificate and valuable skills and experience.",
                icon: <TbCertificate />
            },
            {
                id: " 03",
                title: "Exclusive Learning Materials",
                describe: "Our learning materials include text with multimedia on all areas of the curriculum.",
                icon: <GiNewspaper />
            },
            {
                id: " 04",
                title: "Career Upgrade",
                describe: "Learning a new language is a fascinating thing that can lead to great opportunities.",
                icon: <BsRocketTakeoff />
            },
            {
                id: " 05",
                title: "Professional Teachers",
                describe: "Our team consist of high-quality and certified teachers with big experience.",
                icon: <BiLike />
            },
            {
                id: " 06",
                title: "Friendly Learning Environment",
                describe: "Our method based on learning a language in a friendly and open atmosphere.",
                icon: <GiThreeFriends />
            }
        ]
        return useData;
    }, []);
    return (
        <div className='p-6'>
            <h1 className='text-5xl font-bold text-black text-center'>Why Choose Us</h1>
            <p className='text-orange-600 text-md font-semibold mb-4 text-center'>Simple Reasons</p>
            <div className='relative'>
                <Image className=' hidden lg:flex w-[320px] absolute bottom-0 left-[50%] right-[50%] -ml-36' src={Person} alt='people' />
                <div className='w-100 lg:w-[1000px] mx-auto grid grid-cols-1 md:grid-cols-2 my-12'>
                    {demoData.map((data, index) =>
                        <div key={data.id} className={`flex items-center ${index % 2 !== 0 ? "flex-row-reverse" : null}  gap-2 mx-4 my-8  `}>
                            <div className=' text-orange-600 text-5xl hover:text-black
                        p-2 hover:bg-orange-100 hover:rounded-md transition delay-150'>
                                {data.icon}
                            </div>
                            <div className={`flex
                        flex-col w-full  ${index % 2 !== 0 ? "text-right" : "text-left"} lg:w-3/5`}>
                                <h3 className='text-lg font-semibold'>{data.title}</h3>
                                <p className=''>{data.describe}</p>
                            </div>
                        </div>
                    )}
                </div>

            </div>

        </div>
    );
});

export default WhyChoose;