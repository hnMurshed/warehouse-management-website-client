import React from 'react';
import imgNotFound from '../../images/page-not-found.jpg';

const NotFound = () => {
    return (
        <div className='container my-5'>
            <img style={{borderRadius: '20px'}} className='w-100' src={imgNotFound} alt="Page Not Found" />
        </div>
    );
};

export default NotFound;