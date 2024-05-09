import React, { useContext } from 'react';
import login from '../../assets/images/login/login.svg'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import Sociallogin from '../shear/Social/Sociallogin';
const Login = () => {
    const {signin} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value; // Use form.email.value to get the email value
        const password = form.password.value; // Use form.password.value to get the password value
        const data = { email, password };
        console.log(data); // Logging the data object

        signin(email,password)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            const loggedUser = {

                email: user.email

            }
            console.log(loggedUser);

           
            // navigate(from, {replace:true});
            fetch('https://car-doctor-server-1y284xaw7-mdabdusshobhans-projects.vercel.app/jwt',{
                method:'POST',
                headers:{
                    'content-type' : 'application/json'
                },
                body: JSON.stringify(loggedUser)
            })
            .then(res => res.json())
            .then(data =>{

                console.log(data);
                // warnig: Local Storage is not the best
                localStorage.setItem('car-access-token', data.token);
            })
            navigate(from, {replace:true});
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
          });

        form.reset();
    }

    return (
        <div >
            <div className="hero min-h-screen bg-base-200 ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left w-1/2">
                        <img src= {login} alt="" />
                    </div>
                    <div className="card shrink-0  max-w-sm shadow-2xl bg-base-100 w-1/2">
                        

                            <form onSubmit={handleLogin}>
                                
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
                                
                                <input  className="btn btn-primary" type="submit" value="Login" />
                            </div>

                            </form>

                            <p>New to Car Doctor? <Link to="/signup" className='text-orange-600 '>Sign up</Link></p>
                            <Sociallogin></Sociallogin>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;