import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import Rating from 'react-rating';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { FaFeatherAlt, FaJsfiddle, FaRegStar, FaRegStarHalf, FaStar } from "react-icons/fa";


const Food = ({ food }) => {
    const [isdisable, setisdisable] = useState(false)
    const { name, ingredient, image, rating, cooking_method } = food;
    const notify = (event) => {
        toast("Favourite Added");
        setisdisable(!isdisable);
    }
    return (
        <div>
            <div className="card bg-gray-800 shadow-xl p-5 rounded-xl text-white">
                <div className="card-body">
                    <h2 className="card-title text-2xl text-center font-bold mb-5"> <FaFeatherAlt/> {name}</h2>
                    <div>
                        <p className='text-xl'>Ingredient : </p>
                        <p className='p-5 italic'>{ingredient}</p>
                    </div>
                    <div>
                        <p className='text-xl'>Cooking Method : </p>
                        <p className='p-5 italic'>{cooking_method}</p>
                    </div>
                </div>
                <figure><img src={image} alt="Shoes" /></figure>
                <div className='flex items-center justify-center m-5'> 
                <Rating
                    placeholderRating={rating}
                    emptySymbol={<FaRegStar className='fill-yellow-600'/>}
                    placeholderSymbol={<FaStar className='fill-yellow-600'/>}
                    fullSymbol={<FaRegStarHalf className='fill-yellow-600'/>}
                />
                </div>
                <div className='flex mt-5 justify-center '>
                    <Button disabled={isdisable} className="w-12/9 btn p-2 bg-red-400 text-white -m-5" onClick={notify}>Favourite</Button>
                    <ToastContainer
                        position="top-center"
                        autoClose={2000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="dark"
                    />
                </div>
            </div>
        </div>
    );
};

export default Food;