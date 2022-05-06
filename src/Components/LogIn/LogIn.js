import React from 'react';
import "./LogIn.css";
import auth from '../../init';
import { useLocation, useNavigate } from 'react-router-dom';
import useToSignInWithThirdParty from '../../Hooks/UseToSignIn';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
const Login = () => {
    // console.log("auth:",auth);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const gotoRegisterpage = () =>{
        navigate("/register")

    }
    // const location = useLocation();
    // const from = location.state?.from?.pathname || "/";
    // console.log("from:", from)
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
    // function = getToLogIn
    const getToLogIn = (event) =>{
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        signInWithEmailAndPassword(email, password);
        console.log("sign in ")
        navigate(from, {replace: true})
        
        
    }
    // if(user){
    //     navigate(from, {replace: true})
    // }
    // navigate(from, { replace: true } );
    const {createUserUsingGoogle, createuserUsingFacebook} = useToSignInWithThirdParty();
    return (
        <div className="formContainer my-5 text-center">
            <h1>log in page</h1>
            <form onSubmit={getToLogIn}>
                <input type="email" name = "email" placeholder='enter email'></input>

                <input type="password" name = "password" placeholder='enter password'></input>
                <p>New in My Currency World? <button onClick={gotoRegisterpage} className='btn btn-link'>Go to Register</button></p>
                <button className='btn btn-success d-block w-75 mx-auto' type="submit">Log In</button>
            </form>
            <hr></hr>
            <h3>Log In using third party</h3>
            <div>
                <button className='btn d-block w-75 bg-success my-2 mx-auto' onClick={createUserUsingGoogle}  type="button" >
                    <div className= "d-flex align-items-center ">
                        <svg style={{ width: "20px", height: "20px" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" /></svg>
                        <span className='ms-5'>Log In With Google</span>
                    </div>

                </button>
                <button className='btn d-block w-75 bg-success mx-auto' onClick={createuserUsingFacebook} type="button">
                    <div className='d-flex align-items-center'>
                    <svg style={{ width: "20px", height: "20px" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" /></svg>
                    <span className='ms-5'> Log In With Facebook</span>
                    </div>
                </button>
            </div>
        </div>
    );
};

export default Login;