import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import "./Recipies.css"
import Food from '../food/Food';
import LazyLoad from 'react-lazy-load';
import { FaRegThumbsUp, FaUser } from 'react-icons/fa';

const Recipies = () => {
    const { id } = useParams();
    const fulldetails = useLoaderData();
    const { name, picture, bio, yearsOfExperience, numberOfRecipes, likes } = fulldetails;

    const [data, setdata] = useState([]);
    console.log(data);
    useEffect(() => {
        fetch(`https://server-site-paulniloy.vercel.app/recipies/${id}`)
            .then(res => res.json())
            .then(data => setdata(data))
    }, [])
    return (
        <div>
            <div className="hero text-white flex justify-center mt-10 bg-gray-600 w-9/12 rounded-xl mx-auto p-20">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <LazyLoad threshold={0.95} onContentVisible={() => { console.log('loaded!') }}>
                            <img className='rounded-lg shadow-xl mb-5' src={picture} alt="" />
                        </LazyLoad>
                        <h1 className="text-5xl font-bold">{name}</h1>
                        <p className="py-4">{bio}</p>
                        <p className="font-bold">Years of Experience : {yearsOfExperience}</p>
                        <p className="mt-2 font-bold">Years of Experience : {numberOfRecipes}</p>
                        <p className="mt-2 font-bold">Likes : {likes}</p>

                    </div>
                </div>
            </div>
            <div className='flex
             flex-col text-white justify-center items-center gap-10 mt-20 mb-20'>
                <h1 className='font-bold text-4xl'>Recipies Details</h1>
            </div>
            <div className='grid-cols-1 lg:grid-cols-2 grid mx-auto w-9/12 p-5 gap-10 mt-10 mt-10'>
                {
                    data.map(food => <Food key={food.id} food={food}></Food>)
                }
            </div>
        </div>
    );
};

export default Recipies;