import React from 'react';
// import img from '../../../assets/images/about_us/img.png'
import img from '../../../assets/images/banner/img.png';
const Other = () => {
    return (
        <div className='mb-28'>
            <div className="card w-full h-28  image-full">
                <figure><img src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Contact!</h2>
                    <p>We are open monday to firday</p>
                        <p className='text-red-700 font-bold text-2xl'> 7.00 am to 9.00 pm</p>
                   
                </div>
            </div>
        </div>
    );
};

export default Other;