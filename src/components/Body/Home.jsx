import React from 'react';
import banner from '../../assets/banner.jpg'
import { useLoaderData } from 'react-router-dom';
import Chef from '../chef details/Chef';
import "./Home.css"
import { IoStar, IoStarHalf } from "react-icons/io5";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {

    const handletoast = () => {
        toast("Welcome to the Chef Paradise");
    }

    const chefdetails = useLoaderData();
    return (
        <div>
            <div className='text-white flex flex-col justify-center items-center' id='reservation' style={{
                backgroundImage: "url(reservation.jpg)", backgroundRepeat: "no-repeat", height
                    : "600px", backgroundSize: "cover"
            }}>
                <div className='flex gap-5 mb-5 scale-150'>
                    <IoStar className='fill-yellow-600' />
                    <IoStar className='fill-yellow-600' />
                    <IoStar className='fill-yellow-600' />
                    <IoStar className='fill-yellow-600' />
                    <IoStarHalf className='fill-yellow-600' />
                </div>
                <div onMouseOver={handletoast} className=' border-2 rounded-xl hover:bg-yellow-600 hover:text-white p-5 border-yellow-600 text-6xl font-bold text-yellow-600'>Welcome</div>
                <ToastContainer
                    position="top-center"
                    autoClose={1000}
                    hideProgressBar={true}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss={true}
                    draggable
                    pauseOnHover
                    theme="dark"
                />
                <div className='w-1/2 text-center mt-10 text-yellow-600'>
                    Welcome to our hotel! We are delighted to have you as our guest and we hope you have a comfortable and enjoyable stay with us. If you need anything during your time here, please don't hesitate to ask our friendly staff who are always available to assist you. Thank you for choosing our hotel for your accommodation needs.
                </div>
            </div>
            <div className='text-center m-20'>
                <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">The world's <span class="text-blue-600 dark:text-blue-500">Number #1</span> Chef Platform.</h1>
                <p class="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">Chef's website number one is a one-stop-shop for food lovers and culinary enthusiasts. It features an extensive collection of recipes, cooking tips, and techniques, along with a blog, community forums, and online store. The website's sleek and modern design makes it easy to navigate, and the user-friendly interface ensures a seamless browsing experience.</p>
            </div>
            <div className='flex-col lg:flex-row lg:flex items-center justify-center gap-10 w-9/12 mx-auto p-10'>
                <div>
                    <img className='h-80 rounded-3xl' src={banner} alt="" />
                </div>
                <div className='flex flex-col items-center w-1/2 mx-auto p-2'>
                    <h1 className='text-5xl font-bold mb-5 text-yellow-600 '>Features</h1>
                    <p className='italic text-start'>
                        Our restaurant offers a range of dishes that are flavorful and aromatic, with a focus on fresh ingredients and a balance of spicy, sour, sweet, and salty flavors.
                        We also have vegetarian option along with the non-vagitarian option.
                    </p>
                </div>
            </div>
            <h1 className='text-center text-5xl font-bold mt-5'>Chef Details</h1>
            <div className='grid-cols-1 lg:grid-cols-3 gap-5 m-20 grid'>
                {
                    chefdetails.map(chefdetails => <Chef chefdetails={chefdetails}></Chef>)
                }
            </div>
            <div className='flex-col lg:flex-row lg:flex text-center mb-10 items-center w-9/12 mx-auto justify-evenly'>
                <div>
                    <img className='lg:h-96 mb-10' src="deliver.jpg" alt="" />
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
            <div className=''>
                <div className="stats shadow bg-gray-700 w-9/12 mx-auto p-10 flex lg:flex-row flex-col items-center justify-around mb-10">

                    <div className="stat mb-5 flex flex-col items-center">
                        <div className="stat-figure text-secondary">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        </div>
                        <div className="stat-title">Current Workers</div>
                        <div className="stat-value">31K</div>
                    </div>

                    <div className="stat mb-5 flex flex-col items-center">
                        <div className="stat-figure text-secondary">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
                        </div>
                        <div className="stat-title">New Online Deliveries</div>
                        <div className="stat-value">420k</div>
                    </div>

                    <div className="stat flex flex-col items-center">
                        <div className="stat-figure text-secondary">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg>
                        </div>
                        <div className="stat-title">World Wide Consumers</div>
                        <div className="stat-value">1200k</div>
                    </div>

                </div>
            </div>
            <div>
                <h1 className='text-5xl text-center m-20 font-bold'>Some of Our Cuisines</h1>
                <div className="carousel w-9/12 h-96 mx-auto">
                    <div id="slide1" className="carousel-item relative w-full">
                        <img src="https://foodandroad.com/wp-content/uploads/2021/04/green-papaya-salad-mamao-verde-salada-som-tam-4-2.jpg" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide4" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <img src="https://foodandroad.com/wp-content/uploads/2021/04/laab-larb-3.jpg" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <img src="https://foodandroad.com/wp-content/uploads/2021/04/jok-rice-porridge-2.jpg" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide4" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide4" className="carousel-item relative w-full">
                        <img src="https://foodandroad.com/wp-content/uploads/2021/04/pad-thai-3.jpg" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-9/12 mx-auto m-10'>
                <blockquote class="text-xl italic font-semibold text-center text-gray-900 dark:text-white">
                    <p>""Good food is a celebration of life, and chefs are the conductors of this symphony. Their pricing reflects the passion, effort, and expertise that goes into creating each dish.""</p>
                </blockquote>
            </div>
        </div>
    );
};

export default Home;