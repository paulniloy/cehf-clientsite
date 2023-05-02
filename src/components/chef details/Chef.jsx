import React from 'react';
import { IoHeartCircleSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';

const Chef = ({ chefdetails }) => {
    const { id, picture, name, yearsOfExperience, likes, numberOfRecipes } = chefdetails;
    return (
        <div>
            <div className="card bg-indigo-100 rounded-2xl shadow-xl flex flex-col items-center">
                <figure className="px-10 pt-10">
                    <img src={picture} className="h-40 w-40 rounded-xl" />
                </figure>
                <div className="card-body items-center text-center p-5">
                    <h2 className="card-title font-bold text-xl mb-3 ">{name}</h2>
                    <p className='border-4 rounded-xl'>Number of Rescipies <span>{numberOfRecipes}</span></p>
                    <p>Years of Experiences : {yearsOfExperience}</p>
                    <p>Total likes :{likes}</p>
                </div>
                <Link to={`/recipies/${id}`} className='bg-green-400 p-2 rounded-xl mb-10'>view recipes</Link>
            </div>
        </div>
    );
};

export default Chef;