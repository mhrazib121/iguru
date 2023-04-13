import React from 'react';
import BgCity from "../assets/callToActionBg.9358b86d17d9047dbbc8.png"
import Image from 'next/image';

const SubscribeSection = () => {
    return (
        <div className=''>
            <div className='py-8 lg:py-24 px-8'
                style={{
                    background: `rgba(0, 0, 0, .9) url(${BgCity.src}) no-repeat`,
                    backgroundSize: "100vw",
                    backgroundPosition: "cover"

                }}
            >
                <div className='lg:flex flex-col items-center'>
                    <h3 className='text-white text-5xl mb-4 font-bold '>Web development Course For Professionals</h3>
                    <p className='text-white text-lg'>Our qualified and experienced trainers created special
                        programmes to meet your specific needs.</p>
                    <button className="btn mt-4 border-none rounded-sm bg-orange-600 text-white hover:bg-white hover:text-black">Red More</button>
                </div>
            </div>
        </div>
    );
};

export default SubscribeSection;