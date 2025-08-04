import React from 'react'
import freshcartlogo from '../assets/freshcart-logo.svg';
import { Link } from 'react-router-dom';




function Navbar() {
    return (
            <div className='bg-gray-100 p-3'>
        <div className='container m-auto '>
                <Link to='/'>
                    <img src={freshcartlogo} alt='logo' className='h-9 mb-2 ' />
                </Link>
            </div>
        </div>
    )
}

export default Navbar
