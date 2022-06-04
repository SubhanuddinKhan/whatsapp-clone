import React from 'react';
import "./Login.css";
import { Button } from '@mui/material';
import { auth,provider } from './firebase';
import { actionTypes } from '../features/reducer';
import {useStateValue} from "../features/StateProvider";


function Login() {

    const [{}, dispatch] = useStateValue();

    const signIn = () => {
        auth
        .signInWithPopup(provider)
        .then((result) => {
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            });
        })
            .catch(error => alert(error.message));
    };

  return (
    <div className='login'>
        <div className='login__container'>
            <img src='https://www.freepnglogos.com/uploads/whatsapp-logo-png-hd-2.png' alt="" />

            <div className='login__text'>
                <h1>Sig in to Whatsapp</h1>
            </div>

            <Button onClick={signIn}>
                Sign In with Google
            </Button>
        </div>
        
    </div>
  )
}

export default Login