import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Food = ({ food }) => {
    const [isdisable, setisdisable] = useState(false)
    const { name, ingredient, image, rating, cooking_method } = food;
    const notify = (event) => {
            toast("Favourite Added");
            setisdisable(!isdisable);
        }
    return (
        <div>
            <div className="card bg-gray-800 shadow-xl p-5 rounded-xl ">
                <div className="card-body">
                    <h2 className="card-title text-2xl text-center font-bold mb-5">{name}</h2>
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
                <p className='text-xl text-center font-bold text-amber-400'>rating : {rating}</p>
                <div className='flex mt-5 justify-center '>
                    <Button disabled={isdisable} className="w-12/9 btn p-2 bg-red-400 text-white" onClick={notify}>Favourite</Button>
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