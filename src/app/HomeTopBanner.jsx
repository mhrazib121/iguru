import React from 'react';
import Feature1 from "../app/assets/home-2_slider-01.png";
// import { ReactComponent as Check } from "../../assets/icons/Check.svg";
// import person2 from "../../assets/Doctors/person-2.png";
import Image from 'next/image';
import useTheme from './utils/Theme/CustomTheme';

const HomeTopBanner = () => {
    const { color } = useTheme();
    return (
        <div className="w-4/5 mx-auto  hero min-h-screen mt-20">
            <div className="hero-content pb-0 flex-col lg:flex-row-reverse">
                <Image src={Feature1} alt="Doctor" className="max-w-[420px] rounded-lg " />
                <div className=''>
                    <span className={`p-2 text-md bg-color-light leading-8 rounded-md text-[${color.primary}]`}> LEARN ANYTIME, LEARN ANYTHING</span> <br /> <br />
                    <h1 className="text-5xl font-bold">We Give You The Perfect Smile You Wanted</h1>
                    <p className="py-6 text-xl"> There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable.Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi.</p>
                    <br />
                    <ul className='text-lg'>
                        <li className='my-2 flex gap-3'>
                            {/* <Check width={24} height={24} fill={color.primary} /> */}
                            <span>Mauris mattis lectus eget ligula dapibus, ac maximus ipsum</span>
                        </li>
                        <li className='my-2 flex gap-3'>
                            {/* <Check width={24} height={24} fill={color.primary} /> */}
                            <span>Aenean facilisis erat et metus semper molestie sem posuere</span>
                        </li>
                        <li className='my-2 flex gap-3'>
                            {/* <Check width={24} height={24} fill={color.primary} /> */}
                            <span>
                                Donec sit amet lorem non mi fringilla finibus pretium vel ante</span>
                        </li>
                    </ul>
                    <br />
                    <hr />
                    <div className='mt-12 '>
                        <div className='flex gap-8 justify-start items-center'>
                            {/* <Image className='w-24' src={person2} alt="" /> */}
                            <div>
                                <p className='text-2xl'>+880-0123-456789</p>
                                <p className='text-color-primary'>Do you have any question?</p>
                            </div>
                        </div>
                        <button className="btn mt-4 border-none rounded-sm bg-color-primary text-white">Red More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeTopBanner;