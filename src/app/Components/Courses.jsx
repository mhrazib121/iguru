"use client";
import React, { memo } from 'react';
import useTheme from '../utils/Theme/CustomTheme';
import useData from '../Hooks/useData';
import Course from './Course';
import Tittle from './Common/Tittle';

const Courses = memo(function Courses() {
    var rea = "d";
    const { color } = useTheme();
    const [data] = useData();
    return (
        <div className='w-screen lg:w-3/5 p-4 bg-slate m-auto'
            data-aos='fade-up'
            data-aos-delay='1200'>
            <Tittle text="Browse Top" />
            <br />
            <h1 className='text-5xl font-bold text-black'>Top Level Courses</h1>
            <br />
            <br />
            <div className='grid gap-3  md:grid-cols-2 lg:grid-cols-4'>

                {
                    data.map((p) => <Course key={p.id} item={p} />)
                }
            </div>
            <br /><br />
        </div >
    );
});

export default Courses;