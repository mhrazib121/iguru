import React from 'react';
// import data
import { testimonials } from '../utils/Data/staticData';
// import components
import ClientSlider from './ClientSlider';

const Testimonials = () => {
    // destructure testimonials
    const { title, clients } = testimonials;
    return (
        <section className='w-4/5 lg:w-3/5 lg:p-4 mx-auto'>
            <div className='container mx-auto'>
                {/* title */}
                <h2
                    className='text-3xl md:text-4xl lg:text-6xl font-semibold mb-10 lg:mb-20 text-center max-w-[920px] mx-auto'
                    data-aos='fade-up'
                    data-aos-delay='200'
                >
                    {title}
                </h2>
                {/* slider */}
                <div data-aos='fade-up' data-aos-delay='400'>
                    <ClientSlider clients={clients} />
                </div>
            </div>
        </section>
    );
};

export default Testimonials;