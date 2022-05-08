import React from 'react';

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();
    return (

        <div className='bg-dark text-white p-5 mt-5 text-center'>
            {year}@all rights received

            

            
        </div>
    );
};

export default Footer;