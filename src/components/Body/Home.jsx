import React from 'react';
import banner from '../../assets/banner.jpg'
import { useLoaderData } from 'react-router-dom';
import Chef from '../chef details/Chef';
import "./Home.css"
import { IoStar, IoStarHalf } from "react-icons/io5";

const Home = () => {
    const chefdetails = useLoaderData();
    return (
        <div>
            <div className='text-white flex flex-col justify-center items-center' id='reservation'>
                <div className='flex gap-5 mb-5 scale-150'>
                    <IoStar className='fill-yellow-600'/>
                    <IoStar className='fill-yellow-600'/>
                    <IoStar className='fill-yellow-600'/>
                    <IoStar className='fill-yellow-600'/>
                    <IoStarHalf className='fill-yellow-600'/>
                </div>
                <div className=' border-2 rounded-xl hover:bg-yellow-600 hover:text-white p-5 border-yellow-600 text-6xl font-bold text-yellow-600'>Welcome</div>
                <div className='w-1/2 text-center mt-10 text-yellow-600'>
                Welcome to our hotel! We are delighted to have you as our guest and we hope you have a comfortable and enjoyable stay with us. If you need anything during your time here, please don't hesitate to ask our friendly staff who are always available to assist you. Thank you for choosing our hotel for your accommodation needs.
                </div>
            </div>
            <div className='flex items-center justify-center gap-10 p-10'>
                <div>
                    <img className='h-80 rounded-3xl' src={banner} alt="" />
                </div>
                <div className=' w-1/2 p-5'>
                    <h1 className='text-5xl font-bold mb-5 text-yellow-600 '>Features</h1>
                    <p className='italic text-start'>
                    Our restaurant offers a range of dishes that are flavorful and aromatic, with a focus on fresh ingredients and a balance of spicy, sour, sweet, and salty flavors.
                    We also have vegetarian option along with the non-vagitarian option.
                    </p>
                </div>
            </div>
            <h1 className='text-center text-5xl font-bold mt-5'>Chef Details</h1>
            <div className='grid-cols-3 gap-5 m-20 grid'>
                {
                    chefdetails.map(chefdetails => <Chef chefdetails={chefdetails}></Chef>)
                }
            </div>
            <div className='flex items-center justify-evenly'>
                <div>
                    <img className='h-96'  src="deliver.jpg" alt="" />
                </div>
                <div>
                    <h1 className='text-5xl font-bold mb-5 text-yellow-600'>Delivery Options</h1>
                    <p>We have the very fast delivery service of our own restaurant. It includes :</p>
                    <ol className='mt-5 italic'>
                        <li>Home Delivery</li>
                        <li>Third-party delivery services</li>
                        <li>Meal kit delivery</li>
                        <li>Subscription meal delivery</li>
                        <li>Online ordering</li>
                    </ol>
                </div>
            </div>
        </div>
    );
};

export default Home;