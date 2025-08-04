import React, { Fragment, useEffect, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import axios from 'axios';
import Swal from 'sweetalert2';

function Signup({ setOpen }) {


  let [Sinupdata, setSinupdata] = useState({});

  const signupapi = (e) => {
    setSinupdata(
      { ...Sinupdata, [e.target.name]: e.target.value })
  }

  //allusers-------------------------

  useEffect(() => {

    allusers();
  }, []);


  let [getuser, setgetuser] = useState([])

  let allusers = () => {
    axios.get("http://localhost:5151/allusers").then((res) => {
      if (res.data.status) {
        setgetuser(res.data.ouruser)
      }
    }).catch((err) => {
      console.log(err)

    }) 
  }


  // filter alluser by email---------------

  let filteremail = getuser.filter(data => data.email === Sinupdata.email)
  let allreadyuser = filteremail[0]


  let signupbtn = () => {

    if (allreadyuser) {
      Swal.fire({
        icon: "error",
        title: "alredy signup"
      });
    } else {

    axios.post("http://localhost:5151/signup", { Sinupdata })
    .then((res) => {
  if (res.data.status) {
    Swal.fire({
      title: res.data.msg,
      icon: "success"
    });
    allusers(); // 👈 Fetch users again to update state
  } else {
    Swal.fire({
      icon: "error",
      title: res.data.msg,
    });
  }
}).catch((err) => {
        console.log(err)
      })
    }

  }





  return (
    <>
      <Transition show={true} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={() => setOpen(false)}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500/75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                  <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                    <div className="text-center">
                      <h2 className="text-xl font-bold mb-5">Signup</h2>



                      <div >
                        <div className='text-left'>
                          <label>Name</label>
                          <input
                            onChange={signupapi}
                            type="text"
                            name="name"
                            placeholder="Enter your name"
                            className="w-full border px-3 py-2 rounded mt-1 mb-3 "
                          />
                        </div>
                        <div className='text-left'>
                          <label>Email</label>
                          <input
                            onChange={signupapi}

                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            className="w-full border px-3 py-2 rounded  mt-1 mb-3"
                          />
                        </div>
                        <div className='text-left'>
                          <label>Password</label>
                          <input
                            onChange={signupapi}
                            type="password"
                            name="password"
                            placeholder="Enter your password"
                            className="w-full border px-3 py-2 rounded  mt-1 mb-3"
                          />
                        </div>
                        <p className="text-sm  mt-2 mb-3">
                          By signing up, you agree to our{' '}
                          <a href="#" className="text-blue-500 underline">
                            Terms & Service
                          </a>{' '}
                          and{' '}
                          <a href="#" className="text-blue-500 underline">
                            Privacy Policy
                          </a>.
                        </p>
                        <button

                          onClick={signupbtn}
                          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded  mt-2"
                        >
                          Sign Up
                        </button>
                        <p className="text-sm mt-3">
                          Already have an account?{' '}
                          <a href="/login" className="text-blue-500 underline  mt-2 ">
                            Sign in
                          </a>
                        </p>
                      </div>

                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>

    </>
  )
}

export default Signup
