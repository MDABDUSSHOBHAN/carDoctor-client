import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCArd = ({data}) => {

    const {_id,img,title,price} = data;
    console.log(data.img);
    
    return (
        <div>
            <div className="card card-compact h-96 bg-base-100 shadow-xl">
                <figure><img src={img} alt="Shoes" /></figure>
                <div className="card-body">
                <p className='text-start'>{title}</p>
                    <h2 className="card-title text-orange-500 font-semibold">${price}</h2>
                
                    <div className="card-actions justify-end">
                     <Link to={`/checkout/${_id}`}><button className="btn btn-primary">Book Now</button> </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCArd;