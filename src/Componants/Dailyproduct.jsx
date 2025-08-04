import React from 'react'
import bannerdeal from '../assets/banner-deal.jpg'
import productimg11 from '../assets/product-img-11.jpg'
import product12 from '../assets/product-12.jpg'
import product13 from '../assets/product-13.jpg'
import { DivideIcon } from '@heroicons/react/16/solid'

function Dailyproduct() {
    return (
        <>
            <div className='container m-auto'>

                <div className='mt-15 text-2xl font-medium'>
                    <h3>Daily Best Sells</h3>
                </div>
                <div className=' flex gap-5.5 mt-7'>


                    <div className='relative group'>

                        <div className='absolute'>
                            <p className='text-white mt-8 ml-7 text-2xl font-bold'>100% Orgenic Coffee <br /> Beans.</p>
                            <p className='text-white mt-5 ml-7  font-medium'>Get the best deal before close</p>
                            <a className="bg-green-600  inline-block p-2 rounded-md text-white font-bold text-[15px] pr-3 ml-7 mt-4"><button >Shope Now</button>

                                <i className="fa-solid fa-arrow-right pl-2"></i></a>
                        </div>

                        <img className='rounded-2xl w-88 ' src={bannerdeal} />

                    </div>
                    <div className='border max-w-auto items-center p-5 w-70 border-gray-300 rounded-2xl hover:border-green-700 hover:shadow-xl' >
                        <div className='relative group'>
                            <div className='absolute gap-2 opacity-0 group-hover:opacity-100 transition-opacity top-36 ml-14 hover:shadow-sm shadow-xl'>
                                <i className="fa-regular fa-eye text-gray-500 hover:text-white hover:bg-green-600 cursor-pointer  bg-white p-2 rounded "></i>
                                <i className="fa-regular fa-heart text-gray-500 hover:text-white hover:bg-green-600 cursor-pointer ml-1 mr-1 bg-white p-2 rounded "></i>
                                <i className="fa-solid fa-arrow-right-arrow-left text-gray-500 hover:text-white hover:bg-green-600 cursor-pointer  bg-white p-2 rounded "></i>

                            </div>
                            <img className='cursor-pointer' src={productimg11} />
                        </div>

                        <h1 className='text-gray-400 text- mb-1 cursor-pointer'>Fruits & Vegitable</h1>
                        <h1 className='font-medium hover:text-green-800 cursor-pointer'>Golden pineapple</h1>

                        <div className='flex justify-between mt-4 mb-2 '>
                            <div className=''>
                                <p>$20.6 <span className='text-gray-400 font-sm'>$24</span></p>
                            </div>

                            <div className='flex'>
                                <i className="fa-solid fa-star text-yellow-400 mr-1 text-sm"></i>
                                <i className="fa-solid fa-star text-yellow-400 mr-1 text-sm"></i>
                                <i className="fa-solid fa-star text-yellow-400 mr-1 text-sm"></i>
                                <i className="fa-solid fa-star text-yellow-400 mr-1 text-sm"></i>
                                <i className="fa-solid fa-star-half-stroke text-yellow-400 mr-1 text-sm"></i>
                            </div>
                        </div>

                        <button className='bg-green-600 w-full p-3  rounded-2xl text-white cursor-pointer  text-center font-medium m-auto hover:bg-green-700'>+ Add to cart</button>
                        <div className=''>
                            <ul className='flex gap-2 p-3'>
                                <li className=' border border-gray-300 rounded-2xl p-1'>0019<br /><span className='text-gray-500'>Days</span></li>
                                <li className=' border border-gray-300 rounded-2xl p-1'>22 <br /><span className='text-gray-500'>Hours</span></li>
                                <li className=' border border-gray-300 rounded-2xl p-1'>56 <br /><span className='text-gray-500'>Mins</span></li>
                                <li className=' border border-gray-300 rounded-2xl p-1'>37 <br /><span className='text-gray-500'>Sec</span></li>
                            </ul>
                        </div>
                    </div>

                    <div className='border max-w-auto items-center p-5 w-70 border-gray-300 rounded-2xl hover:border-green-700 hover:shadow-xl' >
                        <div className='relative group'>
                            <div className='absolute gap-2 opacity-0 group-hover:opacity-100 transition-opacity top-36 ml-14 hover:shadow-sm shadow-xl'>
                                <i className="fa-regular fa-eye text-gray-500 hover:text-white hover:bg-green-600 cursor-pointer  bg-white p-2 rounded "></i>
                                <i className="fa-regular fa-heart text-gray-500 hover:text-white hover:bg-green-600 cursor-pointer ml-1 mr-1 bg-white p-2 rounded "></i>
                                <i className="fa-solid fa-arrow-right-arrow-left text-gray-500 hover:text-white hover:bg-green-600 cursor-pointer  bg-white p-2 rounded "></i>

                            </div>
                            <img className='cursor-pointer' src={product12} />
                        </div>

                        <h1 className='text-gray-400 text- mb-1 cursor-pointer'>Fruits & Vegitable</h1>
                        <h1 className='font-medium hover:text-green-800 cursor-pointer'>Golden pineapple</h1>

                        <div className='flex justify-between mt-4 mb-2 '>
                            <div className=''>
                                <p>$20.6 <span className='text-gray-400 font-sm'>$24</span></p>
                            </div>

                            <div className='flex'>
                                <i className="fa-solid fa-star text-yellow-400 mr-1 text-sm"></i>
                                <i className="fa-solid fa-star text-yellow-400 mr-1 text-sm"></i>
                                <i className="fa-solid fa-star text-yellow-400 mr-1 text-sm"></i>
                                <i className="fa-solid fa-star text-yellow-400 mr-1 text-sm"></i>
                                <i className="fa-solid fa-star-half-stroke text-yellow-400 mr-1 text-sm"></i>
                            </div>
                        </div>

                        <button className='bg-green-600 w-full p-3 rounded-2xl text-white cursor-pointer  text-center font-medium m-auto hover:bg-green-700'>+ Add to cart</button>
                        <div className=''>
                            <ul className='flex gap-2 p-3'>
                                <li className=' border border-gray-300 rounded-2xl p-1'>0019<br /><span className='text-gray-500'>Days</span></li>
                                <li className=' border border-gray-300 rounded-2xl p-1'>22 <br /><span className='text-gray-500'>Hours</span></li>
                                <li className=' border border-gray-300 rounded-2xl p-1'>56 <br /><span className='text-gray-500'>Mins</span></li>
                                <li className=' border border-gray-300 rounded-2xl p-1'>37 <br /><span className='text-gray-500'>Sec</span></li>
                            </ul>
                        </div>
                    </div>

                    <div className='border max-w-auto items-center p-5 w-70  border-gray-300 rounded-2xl hover:border-green-700 hover:shadow-xl' >
                        <div className='relative group'>
                            <div className='absolute gap-2 opacity-0 group-hover:opacity-100 transition-opacity top-36 ml-14 hover:shadow-sm shadow-xl'>
                                <i className="fa-regular fa-eye text-gray-500 hover:text-white hover:bg-green-600 cursor-pointer  bg-white p-2 rounded "></i>
                                <i className="fa-regular fa-heart text-gray-500 hover:text-white hover:bg-green-600 cursor-pointer ml-1 mr-1 bg-white p-2 rounded "></i>
                                <i className="fa-solid fa-arrow-right-arrow-left text-gray-500 hover:text-white hover:bg-green-600 cursor-pointer  bg-white p-2 rounded "></i>

                            </div>
                            <img className='cursor-pointer' src={product13} />
                        </div>

                        <h1 className='text-gray-400 text- mb-1 cursor-pointer'>Fruits & Vegitable</h1>
                        <h1 className='font-medium hover:text-green-800 cursor-pointer'>Golden pineapple</h1>

                        <div className='flex justify-between mt-4 mb-2 '>
                            <div className=''>
                                <p>$20.6 <span className='text-gray-400 font-sm'>$24</span></p>
                            </div>

                            <div className='flex'>
                                <i className="fa-solid fa-star text-yellow-400 mr-1 text-sm"></i>
                                <i className="fa-solid fa-star text-yellow-400 mr-1 text-sm"></i>
                                <i className="fa-solid fa-star text-yellow-400 mr-1 text-sm"></i>
                                <i className="fa-solid fa-star text-yellow-400 mr-1 text-sm"></i>
                                <i className="fa-solid fa-star-half-stroke text-yellow-400 mr-1 text-sm"></i>
                            </div>
                        </div>

                        <button className='bg-green-600 w-full p-3 rounded-2xl text-white cursor-pointer  text-center font-medium m-auto hover:bg-green-700'>+ Add to cart</button>
                        <div className=''>
                            <ul className='flex gap-2 p-3'>
                                <li className=' border border-gray-300 rounded-2xl p-1'>0019<br /><span className='text-gray-500'>Days</span></li>
                                <li className=' border border-gray-300 rounded-2xl p-1'>22 <br /><span className='text-gray-500'>Hours</span></li>
                                <li className=' border border-gray-300 rounded-2xl p-1'>56 <br /><span className='text-gray-500'>Mins</span></li>
                                <li className=' border border-gray-300 rounded-2xl p-1'>37 <br /><span className='text-gray-500'>Sec</span></li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Dailyproduct
