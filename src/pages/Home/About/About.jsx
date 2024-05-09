import React from 'react';
import person from '../../../assets/images/about_us/person.jpg';
import parts from '../../../assets/images/about_us/parts.jpg';

const About = () => {
    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl ">
                <div className=' lg:w-1/2 relative'>

                <img src={person} className='w-3/4   rounded-lg shadow-2xl' alt="Movie" />
                <img src={parts} className='w-1/2 rounded-lg shadow-2xl border-8 border-white absolute right-5 top-1/2' alt="Movie" />
                </div>
                   
                   
                <div className="card-body lg:w-1/2">
                    <h3 className='text-2xl  font-bold text-orange-600'>About Us </h3>
                    <h1 className='text-4xl font-bold'>We are qualified & of experience in this field</h1>

                 
                        <p className='text-start mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet.quasi fugiat possimus ratione, molestias laudantium.</p>
                   
                    
                    <div className="card-actions justify-end">
                        <button className="btn btn-error">Get More Info</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;