import React from 'react';
import Signupg from '../assets/Signup-g.svg'
import Navbar from '../Componants/Navbar';


const Signup1 = () => {
  return (
<>
      <Navbar />

    <div className="mt-19 flex items-center justify-center bg-white px-4">
      <div className="grid grid-cols-1 gap-15 md:grid-cols-2 max-w-6xl w-full">
        
        {/* Left Illustration */}
        <div className="flex items-center justify-center p-8">
          <img
          src={Signupg}
            alt="Signup Visual"
            className="w-full max-w-md"
          />
        </div>

        {/* Right Form */}
        <div className="flex flex-col justify-center p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Get Start Shopping</h2>
          <p className="text-gray-600 mb-6">Welcome to FreshCart! Enter your email to get started.</p>

          <form className="space-y-4">
            <div className="flex gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="w-1/2 p-3 border border-gray-300 rounded-md"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-1/2 p-3 border border-gray-300 rounded-md"
              />
            </div>

            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 border border-gray-300 rounded-md"
            />

            <div className="relative">
              <input
                type="password"
                placeholder="*****"
                className="w-full p-3 border border-gray-300 rounded-md pr-10"
              />
              {/* <span className="absolute right-3 top-3.5 text-gray-400 cursor-pointer">
                👁️
              </span> */}
            </div>

            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white p-3 rounded-md font-semibold"
            >
              Register
            </button>

            <p className="text-sm text-gray-500 mt-2">
              By continuing, you agree to our{' '}
              <span className="text-green-600 cursor-pointer hover:underline">Terms of Service</span>{' '}
              &{' '}
              <span className="text-green-600 cursor-pointer hover:underline">Privacy Policy</span>
            </p>
          </form>
        </div>
      </div>
    </div></>
  );
};

export default Signup1;
