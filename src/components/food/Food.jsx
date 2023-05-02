import React from 'react';

const Food = ({ foods }) => {
    return (
        <div>
            <div>
                <div className='text-center p-20'>
                    <p className='bg-indigo-200 p-10 rounded-xl'>{foods}</p>
                </div>
            </div>
        </div>
    );
};

export default Food;