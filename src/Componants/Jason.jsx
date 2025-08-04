import React from 'react'
import { Productall } from './Json'


function Jason() {

    const a = Productall.products;


    return (
        <div className='container m-auto mt-15 '>
            <h4 className='text-3xl mb-7 font-medium '>Featured Categories</h4>
            <div className=' flex gap-2 flex-wrap justify-between '>
                {a.map((item) => {
                    return (

                        <div className='border border-gray-300 p-8 rounded-2xl hover:border-green-600 cursor-pointer hover:shadow-lg'>
                            <div>  <img src={item.image} /></div>
                            <h1 className='mt-3 text-gray-500 font-medium'>{item.name}</h1>
                        </div>

                    )
                })}
            </div>
        </div>
    )
}

export default Jason
