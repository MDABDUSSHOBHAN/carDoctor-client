import React, { useContext } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';

const Sociallogin = () => {

    const {googleSignIn} = useContext(AuthContext);

    const handllogin = () =>{

        googleSignIn()
        .then( result => {
            console.log(result.user);
        })
        .catch(error => console.log(error));
    }
    return (
        <div>
            <div className="divider">OR</div>


            <div className='text-center'>
                <button onClick={handllogin} className="btn btn-circle btn-outline">
                   Google
                </button>
                
            </div>

        </div>
    );
};

export default Sociallogin;