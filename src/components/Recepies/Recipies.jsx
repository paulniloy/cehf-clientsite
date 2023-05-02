import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import "./Recipies.css"
import Food from '../food/Food';
import Extra from '../extra info/Extra';

const Recipies = () => {
    const {id} = useParams();
    const fulldetails = useLoaderData();
    console.log(fulldetails);
    const {name, picture, bio, yearsOfExperience, numberOfRecipes, likes, recipies,image, food} = fulldetails;
    return (
        <div>
        <div className='flex flex-col items-center justify-center' id='banner'>
            <div>
            <img className='h-24 rounded-full' src={picture} alt="" />
            </div>
            <p>Name : {name}</p>
            <p className='w-1/2'>Bio : {bio}</p>
            <p>Number of Rescipies: {numberOfRecipes}</p>
            <p>Year of Experiences : {yearsOfExperience}</p>
            <p>Likes : {likes}</p>
        </div>
            <div className='flex
             flex-col justify-center items-center gap-10 mt-20 mb-20'>
                <h1 className='font-bold text-4xl'>Recipies Details</h1>
            </div>
            <div>
                
            </div>
    </div>
    );
};

export default Recipies;