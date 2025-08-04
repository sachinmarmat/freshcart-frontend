import React, { useState } from 'react';
import english from '../assets/english.svg';
import freshcartlogo from '../assets/freshcart-logo.svg';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { FiGrid, FiMenu } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import Addcart from '../Pages/Addcart';
import Dashboard from '../Pages/Dashboard/Dashboard';

const Navfirst = ({ onCartOpen, onProfileClick }) => {
    const [menuOpen, setMenuOpen] = useState(false);





    return (
        <div className='navbar'>
            <div className='bg-gray-100'>
                <div className='container mx-auto'>
                    <div className='flex justify-between p-1'>
                        <h4>Super Value Deals - Save more with coupons</h4>
                        <div className='flex gap-1 '>
                            <img className='w-4' src={english} alt='language' />
                            <p className='hover:text-green-800 text-gray-700'>English</p>
                            <i className='hover:text-green-800 fa-solid fa-chevron-down text-gray-500 text-xs pt-2'></i>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container mx-auto px-4 '>
                <div className='flex justify-between items-center pt-5'>
                    <Link to='/'>
                        <img src={freshcartlogo} alt='logo' className='h-8' />
                    </Link>

                    {/* Desktop Icons */}
                    <div className='hidden md:flex items-center mt-2 mb-1 gap-60'>
                        <div className='flex gap-5'><div className='relative'>
                            <input
                                className='border border-gray-300 p-2 pl-3 pr-10 rounded w-130'
                                type='text'
                                placeholder='Search for Products'
                            />
                            <i className='fa-solid fa-magnifying-glass text-gray-500 text-base absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer'></i>
                        </div>
                            <button className='border p-2 px-4 text-gray-500 rounded hover:bg-gray-300'>
                                <i className='fa-solid fa-location-dot text-gray-400 mr-1'></i>Location
                            </button></div>
                        <div className='gap-5 flex justify-between'>
                            <Link to='/Addcart'>
                                <i className='fa-regular fa-heart text-xl text-gray-500 hover:text-green-600'></i>
                            </Link>

                            <i
                                className='fa-regular fa-user text-xl text-gray-500 hover:text-green-600 cursor-pointer'
                                onClick={onProfileClick}
                            ></i>
                            <i
                                className='fa-solid fa-box text-xl text-gray-500 hover:text-green-600 cursor-pointer'
                                onClick={onCartOpen}
                            ></i>
                        </div>
                    </div>

                    {/* Mobile Icons */}
                    <div className='md:hidden flex items-center gap-4'>
                        <input
                            className='border border-gray-300 p-2 pl-3 pr-10 rounded w-32'
                            type='text'
                            placeholder='Search'
                        />
                        <i
                            className='fa-regular fa-user text-xl text-gray-500 hover:text-green-600 cursor-pointer'
                            onClick={onProfileClick}
                        ></i>
                        <button onClick={() => setMenuOpen(!menuOpen)}>
                            <FiMenu className='text-2xl text-gray-700' />
                        </button>
                    </div>
                </div>

                {/* Collapsible Menu */}
                {menuOpen && (
                    <div className='block md:hidden bg-white shadow-md rounded mt-4 p-4'>
                        <Link to='/Addcart' className='block py-2 text-gray-700 hover:text-green-600'>
                            <i className='fa-regular fa-heart mr-2'></i>Wishlist
                        </Link>
                        <button
                            className='block py-2 text-gray-700 hover:text-green-600'
                            onClick={onCartOpen}
                        >
                            <i className='fa-solid fa-box mr-2'></i>Cart
                        </button>
                        <ul className='mt-2 '>
                            <li className='py-1 hover:text-green-600'>Home</li>
                            <li className='py-1 hover:text-green-600'>Shop</li>
                            <li className='py-1 hover:text-green-600'>Store</li>
                            <li className='py-1 hover:text-green-600'>Mega Menu</li>
                            <li className='py-1 hover:text-green-600'>Pages</li>
                            <li className='py-1 hover:text-green-600'>Accounts</li>
                            <li className='py-1 hover:text-green-600'>
                                <Link to='/dashboard'>Dashboard</Link>
                            </li>
                            <li className='py-1 hover:text-green-600'>Docs</li>
                        </ul>
                    </div>
                )}
            </div>

            <div className='container mx-auto px-4 hidden md:block'>
                <div className='flex gap-6 pt-5 mb-5'>
                    <Link to='/'>
                        <div className='bg-green-600 p-2 gap-2 rounded-2xl w-50 flex justify-center text-white items-center cursor-pointer hover:bg-green-700'>
                            <FiGrid className='text-green-800 text-2xl' />
                            <p>All Department</p>
                        </div>
                    </Link>
                    <ul className='flex gap-5 pt-2 font-medium text-gray-700 '>
                        <li className='hover:text-gray-900 cursor-pointer'>
                            Home <i className='fa-solid fa-chevron-down text-gray-500 text-xs'></i>
                        </li>
                        <li className='hover:text-gray-900 cursor-pointer'>
                            <Link to="/shop"> Shop</Link> <i className='fa-solid fa-chevron-down text-gray-500 text-xs'></i>
                        </li>
                        <li className='hover:text-gray-900 cursor-pointer'>
                            Store <i className='fa-solid fa-chevron-down text-gray-500 text-xs'></i>
                        </li>
                        <li className='hover:text-gray-900 cursor-pointer'>
                            Mega Menu <i className='fa-solid fa-chevron-down text-gray-500 text-xs'></i>
                        </li>
                        <li className='hover:text-gray-900 cursor-pointer'>
                            Pages <i className='fa-solid fa-chevron-down text-gray-500 text-xs'></i>
                        </li>
                        <li className='hover:text-gray-900 cursor-pointer'>
                            <Link to="/Signup1"> Accounts </Link>  <i className='fa-solid fa-chevron-down text-gray-500 text-xs'></i>
                        </li>
                        <li className='hover:text-green-600 cursor-pointer'>
                            <Link to='/Dashboard'>Dashboard</Link>
                        </li>
                        <li className='hover:text-green-600 cursor-pointer'>Docs</li>
                    </ul>
                </div>
            </div>

            <div className='w-full h-0.5 bg-gray-100'></div>

        </div>
    );
};

export default Navfirst;
