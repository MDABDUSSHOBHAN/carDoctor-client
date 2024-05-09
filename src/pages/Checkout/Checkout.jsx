import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import NavCard from '../NavCard/NavCard';
import { AuthContext } from './../../Provider/AuthProvider';

const Checkout = () => {
    const services = useLoaderData();
   
    const {user} = useContext(AuthContext);
    const { title, _id,price,img } = services;

     console.log(services);
    // console.log(user);


    const handelcheckout = event =>{
     
        event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const date = form.date.value;
    const email = form.email.value; // Use form.email.value to get the email value
    const amount = form.amount.value; // Use form.password.value to get the password value
    const booking = { name,date,email,amount, service_id: _id ,img, service:title};
    console.log(booking); // Logging the data object

fetch('https://car-doctor-server-1y284xaw7-mdabdusshobhans-projects.vercel.app/bookings',{
    method: 'POST',
    headers: {
        'content-type' : 'application/json'
    },
    body: JSON.stringify(booking)
})
 .then( res => res.json())
 .then( data => {
    if(data.insertedId){
        alert('User add succfully');
    }
    console.log(data);
 })






    form.reset();





    }
    return (
        <div>
            <NavCard></NavCard>
            <h2 className='text-start text-orange-600 font-bold text-2xl'>Welcome! To {title} Section</h2>

            {/* This is from section */}



            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">

                    <div className="card shrink-0  shadow-2xl bg-base-100">

                        <form onSubmit={handelcheckout}>
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-6  p-4'>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name='name' defaultValue={user?.name}  placeholder="name" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Date</span>
                                    </label>
                                    <input type="date" name='date'  placeholder="date" className="input input-bordered" required />

                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name='email' defaultValue={user?.email}  placeholder="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Due amount</span>
                                    </label>
                                    <input type="text" name='amount' placeholder="Phone" defaultValue={'$'+price} className="input input-bordered" required />

                                </div>

                            </div>
                            

{/* lg */}
<div className='mt-4  bg-base-200 hero-content flex-col lg:flex-row-reverse w-100%'>
<textarea placeholder="Bio" className="textarea textarea-bordered textarea-lg w-full max-w-xs" ></textarea>
</div>


                            <div className="form-control mt-6">


                                <input type="submit" className="btn btn-primary" value="Order Confirm" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>




        </div>
    );
};

export default Checkout;