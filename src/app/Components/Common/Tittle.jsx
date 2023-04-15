import React from 'react';

const Tittle = ({ text }) => {
    return (
        <div className='flex gap-3 '>
            <p className='w-[4px] bg-slate-300'></p>
            <h3 className='text-orange-600 text-xl font-semibold mb-2 uppercase'>{text}</h3>
        </div>
    );
};

export default Tittle;