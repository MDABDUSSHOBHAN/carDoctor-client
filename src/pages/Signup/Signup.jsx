import React, { useContext } from 'react';
import signup from '../../assets/images/login/singup2.jpg';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
const Signup = () => {

    const {createuser} = useContext(AuthContext);
 const handelsignup  = event =>{
   
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value; // Use form.email.value to get the email value
    const password = form.password.value; // Use form.password.value to get the password value
    const data = { name,email, password };
    console.log(data); // Logging the data object
    createuser(email,password)
    .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
    form.reset();



 }


    return (
        <div>
                 <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left w-1/2">
                        <img src= {signup} alt="" />
                    </div>
                    <div className="card shrink-0  max-w-sm shadow-2xl bg-base-100 w-1/2">
                        

                            <form onSubmit={handelsignup}>

                             <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="name" name='name' className="input input-bordered" required />
                            </div>    
                                
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                
                                <input  className="btn btn-primary" type="submit" value="Sign Up" />
                            </div>

                            </form>

                            <p>Already Have an Account? <Link to="/login" className='text-orange-600 '>Login</Link></p>
                            


                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;