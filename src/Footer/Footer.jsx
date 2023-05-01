import React from 'react';
import { FaFacebook, FaGooglePlusG, FaTwitter, FaPinterest } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='bg-black items-start text-white flex justify-around p-10'>
            <article>
                <div className='text-xl font-bold'>
                    Dinner Hours
                </div>
                <div>
                    <ol>
                        <li>Monday : 10am to 10pm</li>
                        <li>Tuesday : 10am to 10pm</li>
                        <li>Wednesday : 10am to 10pm</li>
                        <li>Thursday : 10am to 10pm</li>
                        <li>Friday : 10am to 10pm</li>
                        <li>Saturday : 10am to 10pm</li>
                        <li>Sunday : 10am to 10pm</li>
                    </ol>
                </div>
            </article>
            <article>
                <div className='text-xl font-bold'>
                    Make a booking
                </div>
                <div>
                    <div>Lunch Timing</div>
                    <div>Wed - Sat | 12.00pm to 3pm</div>
                    <div>Dinner Timing</div>
                    <div>Tue - Sun | 5.00pm to 10pm</div>
                    <p className='text-red-600 italic font-medium'>Booking closed on Monday & Tuesday</p>
                </div>
            </article>
            <article>
                <div>Contact Us</div>
                <div>
                    <div>
                        Address : 143 - 158, Bernie Road, Thailand
                    </div>
                    <div>
                        Phone : 01758253054
                    </div>
                    <div>
                        e@mail : enquire123@gmail.com
                    </div>
                </div>
            </article>
            <article className='flex flex-col items-center'>
                <div>We are in Social</div>
                <div className='flex gap-5 p-5'>
                    <FaFacebook className='h-10 w-10 hover:scale-110'/>
                    <FaGooglePlusG className='h-10 w-10 hover:scale-110'/>
                    <FaTwitter className='h-10 w-10 hover:scale-110'/>
                    <FaPinterest className='h-10 w-10 hover:scale-110'/>
                </div>
            </article>
        </div>
    );
};

export default Footer;