import { getAuth, signInWithEmailAndPassword } from '@firebase/auth';
import React, { useState } from 'react';
import { isCompositeComponentWithType } from 'react-dom/test-utils';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import "./Login.css"

const Login = () => {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    // const[passError, setPasserror] = useState("")
    const [isLogIn, setIsLogIn] = useState(false)
    const { user, error, handleGoogleSignIn, setError, handleLoginByEmailPass, handleUserRegister } = useAuth()

    const location = useLocation()
    const history = useHistory()
    const redirect_url = location.state?.from || "/home"

    const googleRedirectLogin = () => {
        handleGoogleSignIn()
            .then(result => {
                history.push(redirect_url)
            })
            .catch(error => {
                console.log(error.message);
            })
    }

    const handleEmail = (e) => {

        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e.target.value)) {
            setEmail(e.target.value);
            setError('')
        }
        else {
            if (e.target.value === "") {
                setError("")
            }
            else {
                setError('Please enter a valid email.')
            }
        }


    }
    const handlePassword = (e) => {
        if (e.target.value === "") {
            setError("")
        }
        else {

            setPassword(e.target.value);
        }


    }
    const toggleLogin = (e) => {
        setIsLogIn(e.target.checked)
        setError('')

    }
    // ==========================
    const handleRegister = () => {
        // if (password < 8) {
        //     console.log('naikjsdklfjdsl');
        //     setError("Password must be length of 8.")
        //     return
        // }
        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            setError("password must be 2 uppercase letters.")
            // return
        }
        // else if (!/(?=.*[!@#$&*])/.test(password)) {
        //     setError("password must be 1 special case letter.")
        //     return
        // }
        else {
            handleUserRegister(email, password, history, redirect_url);
        }
        // history.push(redirect_url)
    };
    const hanldeLogin = () => {


        handleLoginByEmailPass(email, password, history, redirect_url)

    }
    const handleFormReload = e => {
        e.preventDefault()
    }

    return (
        <div className="login-container">
            <div className="form-container">
                <div>
                    {
                        !isLogIn ? <h1 className="text-light">Log in</h1> : <h1 className="text-light">Registation</h1>
                    }

                    <form onSubmit={handleFormReload}>
                        <div className="row mb-3">
                            <div className="col-sm-12">
                                <small className="text-danger">{error}</small>
                                <input onBlur={handleEmail} type="email" placeholder="Email" className="form-control w-75 mx-auto input-field" id="inputEmail3" />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col-sm-12">

                                <input onChange={handlePassword} type="password" placeholder="Password" className="form-control w-75 mx-auto input-field" id="inputPassword3" />
                            </div>
                        </div>

                        <div className="row ">
                            <div className="col-12">
                                <div className="form-check">
                                    <input onChange={toggleLogin} className="" type="checkbox" id="gridCheck" />
                                    <label className="form-check-label p-2 text-light" htmlFor="gridCheck">
                                        {!isLogIn ? "New user?" : "Already registard"}
                                    </label>
                                </div>
                            </div>
                        </div>
                        {
                            !isLogIn ? <button onClick={hanldeLogin} type="submit" className="btn btn-primary w-50 mt-3 login-register">Log in</button> : <button onClick={handleRegister} type="submit" className="btn btn-primary w-50 mt-3 login-register">Registation</button>
                        }

                    </form>
                    <div className="row mb-3 pt-3">
                        <button onClick={googleRedirectLogin} className=" col-sm-12 btn btn-primary w-50 mx-auto btn-bg-color">SignIn by Google</button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;