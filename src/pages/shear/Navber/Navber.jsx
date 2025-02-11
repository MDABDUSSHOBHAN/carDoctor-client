import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
// import logo from '../../../assets/logo.svg'
import logo from '../../../assets/logo.svg'
import { AuthContext } from '../../../Provider/AuthProvider';


const Navber = () => {


    const {user,logOut} = useContext(AuthContext);
    const handellogout = () =>{
        
      
        logOut()
         .then(()=>{
            localStorage.removeItem('car-access-token');
         })
         .catch( error => console.log(error))

    }


    console.log(user?.email)

    const navitems = <>

        <li><Link to="/">Home</Link> </li>
     
        <li> <Link to="/about">About</Link> </li>
        {
          user?.email? <>
          
          <li> <Link to="/bookings">My Bookings</Link> </li>
          <li><button onClick= {handellogout}>LogOut</button></li> 
           </>
          :
          <li> <Link to= '/login'>Login</Link> </li>
          
          
            
           
        }
    </>
    return (


        <div>
            <div className="navbar bg-base-100 h-24">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navitems}
                        </ul>
                    </div>
                    <Link to='/'> <img src={logo} alt="No image" /> </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navitems}

                    </ul>
                </div>
                <div className="navbar-end">
                    <button className=" btn-warning btn btn-outline">Appointment</button>
                </div>
            </div>
        </div>
    );
};

export default Navber;