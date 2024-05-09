import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import BookingRow from './BookingRow';
import { Navigate, useNavigate } from 'react-router-dom';


const Bookings = () => {
  const navigate = useNavigate()
    const {user} = useContext(AuthContext);
    const [booking, setBooking] = useState([]);
    const url =`https://car-doctor-server-1y284xaw7-mdabdusshobhans-projects.vercel.app/bookings?email=${user?.email}`;
    useEffect( () => {
        fetch(url,{

          method: 'GET',
          headers:{
            authorization: `Bearer ${localStorage.getItem('car-access-token')}`
          }
        })
           .then(res => res.json())
           .then( data => {

            if(!data.error){
              setBooking(data)
            }
            else{

              navigate('/');
            }
           })
    },[])
// this is delete method..
    const handleDelete = id =>{
      const proceed = confirm('Are You sure you want to delete?');
      if(proceed){
          fetch(`https://car-doctor-server-1y284xaw7-mdabdusshobhans-projects.vercel.app/bookings/${id}`,{
              method:'DELETE',
          })
          .then(res => res.json())
          .then( data => {

              console.log(data);
              if(data.deletedCount>0){
                  alert('Deleted successful');

                  const remaining = booking.filter(booking => booking._id!==id);
                  setBooking(remaining);
              }
          })
      }
  }

  const  handelupdate = id => {

   fetch(`https://car-doctor-server-1y284xaw7-mdabdusshobhans-projects.vercel.app/bookings/${id}`,{
    method: 'PATCH',
    headers: {
      'content-type' : 'application/json'
    },
    body: JSON.stringify({status: 'Confirm'})
   })
    .then( res => res.json())
    .then( data => {

      console.log(data);
      if(data.modifiedCount > 0) {

        //update couont..
        const remaining = booking.filter(book => book._id !== id);
        const updated = booking.find(book => book._id === id);
        updated.status = 'confirm';
        const newBookings = [ updated , ...remaining];
        setBooking(newBookings);
      }
    })
 


  }


    return (
        <div>
            <h2>Your Total Booking is: {booking.length}</h2>

{/*  */}
<div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead className=' text-green-900 border '>
      <tr>
        <th>
          <label>
            <input   />
          </label>
        </th>
        <th>Name</th>
        <th>Email</th>
        <th>Amount</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
    {/* <BookingRow></BookingRow> */}
{
     
     booking.map(book => <BookingRow
     book={book}
     key={book._id}
     handleDelete ={handleDelete}
     handelupdate = {handelupdate}
     ></BookingRow>)

}
   
   
     
  
    </tbody>
 
    
  </table>
</div>




        </div>
    );
};

export default Bookings;