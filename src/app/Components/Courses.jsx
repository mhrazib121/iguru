"use client";
import React, { memo } from 'react';
import useTheme from '../utils/Theme/CustomTheme';
import useData from '../Hooks/useData';
import Course from './Course';

const Courses = memo(function Courses() {
    var rea = "d";
    const { color } = useTheme();
    const [data] = useData();
    return (
        <div className='w-screen lg:w-4/5 p-4 bg-slate m-auto'>
            <div className='flex gap-3 '>
                <p className='w-[4px] bg-slate-300'></p>
                <h3 className='text-orange-600 text-2xl font-semibold mb-2'>Browse Top</h3>
            </div>
            <br />
            <h1 className='text-3xl font-bold text-black'>Top Level Courses</h1>
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