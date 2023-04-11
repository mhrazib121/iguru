"use client"
import Navbar from '@/app/Components/Navbar';
import useSingleData from '@/app/Hooks/useSingleData';
import Banner from "../../assets/page-common.jpg"
import React, { useEffect, useState } from 'react';
import CommonTopBanner from '@/app/Components/CommonTopBanner/CommonTopBanner';
import Image from 'next/image';

const Page = ({ params }) => {
    const [indexOfQuestion, setIndexOfQuestion] = useState(0)
    const [question, setQuestion] = useState({});
    const [answer, setAnswer] = useState("");

    const { data } = useSingleData(params || 0);
    const { id, logo, name, questions, total } = data;

    useEffect(() => {
        setQuestion(questions ? questions[0] : {});
    }, [questions]);

    console.log("answer", question);

    const previousHandler = () => {
        if (indexOfQuestion > 0) {
            setIndexOfQuestion(indexOfQuestion - 1);
            setQuestion(questions ? questions[indexOfQuestion - 1] : {});
        }
    }
    const nextHandler = () => {
        if (indexOfQuestion < questions.length - 1) {
            setIndexOfQuestion(indexOfQuestion + 1);
            setQuestion(questions ? questions[indexOfQuestion + 1] : {});
        }
    }
    console.log(indexOfQuestion, questions?.length);
    return (
        <>
            <Navbar />
            <CommonTopBanner bgCommonImg={Banner} title="Course Quiz" />
            <br />
            <div className='bg-slate-300 w-2/4 p-12 rounded-md m-auto'>
                <p className='text-right mb-8 text-md font-normal'>Question {indexOfQuestion + 1} out of {total}</p>
                {
                    questions?.map((data) => <>
                        {
                            question === data && <>
                                <h1 className='text-2xl font-semibold mb-4'>
                                    {data.question}
                                </h1>
                                <ul>
                                    {
                                        data.options?.map((p) => <>
                                            <div className='flex gap-3 mb-2 items-center'>
                                                <div className={`border-2 w-[18px] h-[18px] cursor-pointer ${answer === p ? "bg-blue-400" : null}`} onClick={() => setAnswer(p)}>

                                                </div>
                                                <p className='text-xl font-semibold'>{p}</p>
                                            </div>
                                        </>
                                        )
                                    }
                                </ul>
                            </>
                        }
                    </>)
                }
                <div className='flex gap-4 justify-center'>
                    <button className='bg-gray-600 px-4 py-2 h-[40px] rounded-lg text-slate-50' onClick={() => previousHandler()}>Previous</button>
                    <button className='bg-gray-600 px-4 py-2 h-[40px] rounded-lg text-slate-50' onClick={() => nextHandler()}>Next</button>
                </div>
            </div>
            {name}
        </>
    );
};

export default Page;