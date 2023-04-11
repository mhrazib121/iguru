import Image from 'next/image';
import React from 'react';
import Ban from "../../assets/page-common.jpg"

const CommonTopBanner = ({ bgCommonImg, title }) => {
    return (
        <div className='min-h-[250px] md:min-h-[400px] lg:min-h-[600px] bg-cover'
            style={{
                background: `url(${bgCommonImg.src})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: "100%",
                backgroundPosition: "cover"
            }}
        >
            <h1 className='text-white text-lg md:text-3xl lg:text-6xl font-bold text-center pt-[10%]'>{title}</h1>
        </div>
    );
};

export default CommonTopBanner;