import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuthState, useSignInWithFacebook, useSignInWithGoogle} from 'react-firebase-hooks/auth';
import auth from '../init';
const useToSignInWithThirdParty = () => {
    
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    console.log("from:", from)
    // function = sign in with google
    const [signInWithGoogle] = useSignInWithGoogle(auth);
    const [user] = useAuthState(auth);
    console.log("user:", user)
    const createUserUsingGoogle = () => {
        signInWithGoogle();
        
        // console.log("google user created")
        // if (googleUser) {
        //     console.log("navigate from google user")
        //     navigate(from, { replace: true } );
        // }
    }
    // function = sign in with facebook
    const [signInWithFacebook] = useSignInWithFacebook(auth);
    const createuserUsingFacebook = () => {
        signInWithFacebook();
        console.log("facebook user created")
        
        // if (facebookUser) {
        //     navigate(from, { replace: true } );
        // }
    }
    if(user){
        navigate(from, { replace: true } )
    }
    return (
        {createUserUsingGoogle, createuserUsingFacebook}
    );
};

export default useToSignInWithThirdParty;