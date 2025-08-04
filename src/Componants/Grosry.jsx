import React from 'react'
import grocerybanner from '../assets/grocery-banner.png'
import grocerybanner2 from '../assets/grocery-banner-2.jpg'

function Grosry() {
    return (

        <>

            <div className='container m-auto flex gap-6 relative mt-15  '>
                <div className='relative '>

                    <img src={grocerybanner}  />
                    <div className='absolute top-0 left-0 w-full h-full flex-col text-black mt-12 ml-8'>
                        <p className='text-3xl font-bold'>Fruits & Vegetables</p>
                        <p className='text-gray-500'>Get Upto 30% off</p>
                        <button className='border bg-black text-white p-2 rounded-2xl mt-4'>Shop Now</button>
                    </div>
                </div>

                <div className='relative'>

                    <img src={grocerybanner2} />
                    <div className='absolute top-0 left-0 w-full h-full flex-col text-black mt-12 ml-8'>
                        <p className='text-3xl font-bold'>Freshly Baked Buns</p>
                        <p className='text-gray-500'>Get Upto 25% off</p>
                        <button className='border bg-black text-white p-2 rounded-2xl mt-4' >Shop Now</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Grosry
