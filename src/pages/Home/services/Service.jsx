import React, { useEffect, useState } from 'react';
import ServiceCArd from './ServiceCArd';




const Service = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {

        fetch('https://car-doctor-server-1y284xaw7-mdabdusshobhans-projects.vercel.app/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div>
            <div>
                <h3 className='text-3xl text-orange-600 font-bold mt-3'>Our Service</h3>
                <h1 className='text-center text-5xl font-bold'>Our Service Area</h1>
                <p className='text-center'> Lorem ipsum fuga dicta. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, iste! </p>
            </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4'>
        

      

             {
            services.map(data => <ServiceCArd key={data._id} data ={data} ></ServiceCArd>)
           }  

          
     
            
            </div>  


        </div>
    );
};

export default Service;