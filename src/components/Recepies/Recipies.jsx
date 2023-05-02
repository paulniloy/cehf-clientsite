import React from 'react';
import { useParams } from 'react-router-dom';

const Recipies = () => {
    const {id} = useParams()
    return (
        <div>
            this is the recipies page {id}
        </div>
    );
};

export default Recipies;