import React from 'react';
import { Spinner } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../init';

const RequireAuth = ({children}) => {
    const [user, loading] = useAuthState(auth);
    console.log("user:", user, "loading:", loading)
    const location = useLocation();
    console.log("location:",location)
    if (user){
        return children
    }
    if(loading){
        return (
            <div className='text-center'>
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </div>
        )
    }
    else{
        return <Navigate to = "/logIn" state={{ from: location }} replace></Navigate>
    }
};

export default RequireAuth;