import React, { useState } from 'react';
import Signin from '../assets/signin-g.svg'
import axios from 'axios';

const Login = () => {


    let [Signindata, setSignindata] = useState({});

    let Signins = (e) => {
        setSignindata (
            { ...Signindata, [e.target.name]: e.target.value }
        )
    }
    let signinapi = () => {
        axios.post("http://localhost:5151/login", { Signindata })

    }



    return (
        <div className="mt-18 mr-20 flex items-center justify-center bg-white">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-25 ">

                <div className="flex items-center justify-center">
                    <img
                        src={Signin} alt="Login img"
                        className="w-full max-w-md"
                    />
                </div>

                <div className="flex flex-col justify-center">
                    <h2 className="text-3xl font-bold mb-2 text-gray-900">Sign in to FreshCart</h2>
                    <p className="text-gray-600 mb-6">Welcome back to FreshCart! Enter your email to get started.</p>

                    <form className="space-y-4">
                        <input
                            onChange={Signins}
                            type="email"
                            name="email"
                            placeholder="Email"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                            required
                        />
                        <input
                            onChange={Signins}
                            type="password"
                            name='password'

                            placeholder="*****"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                            required
                        />

                        <div className="flex justify-between items-center text-sm">
                            <label className="flex items-center">
                                <input type="checkbox" className="mr-1" />
                                Remember me
                            </label>
                            <a href="/ForgotPassword" className="text-green-600 hover:underline">
                                Forgot password? <strong>Reset It</strong>
                            </a>
                        </div>

                        <button
                            onClick={signinapi}
                            className="w-full py-2 px-4 bg-green-600 text-white rounded-md hover:bg-green-700"
                        >
                            Sign In
                        </button>

                        <p className="text-center text-sm mt-4">
                            Don’t have an account?{' '}
                            <a href="/Signup" className="text-green-600 hover:underline">
                                Sign Up
                            </a>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
