import React from 'react';

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className='w-[450px] mx-auto text-center mt-16 mb-10'>
            <h4 className='text-[#D99904] text-lg italic capitalize'>---{subHeading}---</h4>
            <div className='divider'></div>
            <h1 className='text-4xl uppercase'>{heading}</h1>
            <div className='divider'></div>
        </div>
    );
};

export default SectionTitle;