import React, { useContext } from 'react';
import { AuthContext } from './../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoutes = ({children}) => {
    const {user , loading} = useContext(AuthContext);
    const location = useLocation();

  
    if(user?.email){
        return children;

    }
    if(loading) {

        return <span className="loading loading-spinner text-success"></span>
    }
    return <Navigate to="/login" state={{from:location}} replace></Navigate>
    
};

export default PrivateRoutes;