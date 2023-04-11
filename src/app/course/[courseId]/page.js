"use client"
import Navbar from '@/app/Components/Navbar';
import useSingleData from '@/app/Hooks/useSingleData';
import Banner from "../../assets/page-common.jpg"
import React from 'react';
import CommonTopBanner from '@/app/Components/CommonTopBanner/CommonTopBanner';
import Image from 'next/image';

const Page = ({ params }) => {

    const { data } = useSingleData(params || 0);
    const { id, logo, name, questions, total } = data;

    console.log("singleData", data);

    return (
        <>
            <Navbar />
            <CommonTopBanner bgCommonImg={Banner} title="Course Quiz" />
            {name}
        </>
    );
};

export default Page;