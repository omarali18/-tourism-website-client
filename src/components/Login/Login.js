import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import "./Login.css"
import useAuth from '../../Hooks/useAuth';
import reactDom from 'react-dom';

const Login = () => {
    const { user, signInByGoogle } = useAuth()

    const location = useLocation()
    const history = useHistory()
    // const { state } = location;

    const redirect_url = location.state?.from || "/home"
    let { from } = location.state || { from: { pathname: "/" } };


    const googleRedirectLogin = () => {
        signInByGoogle(history, redirect_url)
        // .then(result => {
        // history.push(redirect_url)
        // window.location.reload(history.push(redirect_url));
        // history.replace(from)

        // })

        // .catch(error => {
        //     console.log(error.message);
        // })
    }

    return (
        <div className="login-container">
            <div className="form-container">
                <div>
                    <h1 className="text-light">Log in</h1>

                    <div className="row mb-3 pt-3">
                        <button onClick={googleRedirectLogin} className=" col-sm-12 btn btn-primary w-50 mx-auto btn-bg-color">SignIn by Google</button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;