import React from 'react';
import banner from '../../assets/banner.jpg'

const Home = () => {
    return (
        <div>
            <div className='flex justify-center gap-10 p-10'>
            <div>
            <img className='h-80 rounded-3xl' src={banner} alt="" />
            </div>
            <div className='w-1/2 p-5'>
                <h1 className='text-5xl font-bold mb-5 '>Welcome to <br /><span className='text-indigo-400'>Our Restaurant</span> </h1>
            <p className='italic text-start'>
            We are delighted to have you as our guest and we hope you have a comfortable and enjoyable stay with us. If you need anything during your time here, please don't hesitate to ask our friendly staff who are always available to assist you. Thank you for choosing our hotel for your accommodation needs.
            </p>
            </div>
        </div>
        <section>
            
        </section>
        </div>
    );
};

export default Home;