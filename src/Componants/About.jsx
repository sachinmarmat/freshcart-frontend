import React from 'react'
import { FiClock ,FiBox ,FiGift ,FiRefreshCw } from 'react-icons/fi';


function About() {
    return (
        <>
            <div className='container m-auto'>
                <div className='flex justify-between mt-10 gap-7 text-left'>
                    <div className='flex-wrap'>
                        <div className="flex  mt-20 mb-7 text-left text-green-600 bg-white">
                            <FiClock size={45} />
                        </div>
                        <p className='font-medium text-xl mb-3'>10 minute grocery now</p>
                        <p className='text-gray-600  m-auto flex-wrap'>Get your order delivered to your doorstep at the earliest from FreshCart pickup stores near you.</p>
                    </div>
                    <div className=''>
                        <div className="flex  mt-20 mb-7 text-left text-green-600 bg-white">
                            <FiGift  size={45} />
                        </div>
                        <p className='font-medium  text-xl mb-3'>Best Prices & Offers</p>
                        <p className='text-gray-600 m-auto flex-wrap'>Cheaper prices than your local supermarket, great cashback offers to top it off. Get best pricess & offers.</p>
                    </div>
                    <div className=''>
                        <div className="flex  mt-20 mb-7 text-left text-green-600 bg-white">
                            <FiBox  size={45} />
                        </div>
                        <p className='font-medium  text-xl mb-3'>Wide Assortment</p>
                        <p className='text-gray-600 m-auto flex-wrap'>Choose from 5000+ products across food, personal care, household, bakery, veg and non-veg & other categories.</p>
                    </div>
                    <div className=''>
                        <div className="flex  mt-20 mb-7 text-left text-green-600 bg-white">
                            <FiRefreshCw  size={45} />
                        </div>
                        <p className='font-medium  text-xl mb-3'>Easy Returns</p>
                        <p className='text-gray-600 m-auto flex-wrap'>Not satisfied with a product? Return it at the doorstep & get a refund within hours. No questions asked policy .</p>
                    </div>

                </div>



            </div>

        </>
    )
}

export default About
