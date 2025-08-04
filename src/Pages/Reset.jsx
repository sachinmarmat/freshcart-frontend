import React from "react";
import fpg from '../assets/fp-g.svg'

const ForgotPassword = () => {
    return (
        <div className="flex items-center justify-center bg-white">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-18 p-4 md:p-5 w-full max-w-5xl">

                <div className="flex items-center justify-center">
                    <img
                        src={fpg}
                        alt="Forgot Password Illustration"
                        className="w-full max-w-md"
                    />
                </div>

                <div className="flex flex-col justify-center">
                    <h2 className="text-3xl font-bold mb-3 text-gray-900">Forgot your password?</h2>
                    <p className="text-gray-600 mb-6">
                        Please enter the email address associated with your account and we will email you a link to reset your password.
                    </p>

                    <form className="space-y-4">
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                            required
                        />

                        <button
                            type="submit"
                            className="w-full py-2 px-4 bg-green-600 text-white rounded-md hover:bg-green-700"
                        >
                            Reset Password
                        </button>

                        <a href="/login">  <button
                            type="button"
                            className="w-full py-2 px-4 bg-gray-200 text-black rounded-md hover:bg-gray-300"
                        >
                            Back
                        </button></a>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;
