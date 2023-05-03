import React from 'react';
import { Button } from 'react-bootstrap';
import { IoHeartCircleSharp } from "react-icons/io5";
import { Link, NavLink } from 'react-router-dom';
import LazyLoad from 'react-lazy-load';
import "./chef.css"

const Chef = ({ chefdetails }) => {
    const { id, picture, name, yearsOfExperience, likes, numberOfRecipes } = chefdetails;
    return (
        <div>
            <div className="card bg-yellow-800 text-white bg-opacity-40 rounded-2xl shadow-xl flex flex-col items-center">
                <figure className="px-10 pt-10">
                    <LazyLoad threshold={0.95} onContentVisible={() => {console.log('loaded!')}}>
                    <img src={picture} className="h-40 w-40 rounded-xl" />
                    </LazyLoad>
                </figure>
                <div className="card-body items-center text-center p-5">
                    <h2 className="card-title font-bold text-xl mb-3 ">{name}</h2>
                    <p className=' rounded-xl'>Number of Recipies <span>{numberOfRecipes}</span></p>
                    <p>Years of Experiences : {yearsOfExperience}</p>
                    <p>Total likes :{likes}</p>
                </div>
                <NavLink variant="success" style={{ textDecoration: "none" }} to={`/recipies/${id}`} className=' text-white p-2 rounded-xl mb-10'><button type="button" class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">View Recipies</button></NavLink>
            </div>
        </div>
    );
};

export default Chef;