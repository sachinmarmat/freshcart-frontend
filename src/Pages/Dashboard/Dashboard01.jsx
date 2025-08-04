import React from 'react'
import {  FaShoppingCart } from "react-icons/fa";
import dashboardimg from '../../assets/dashboard-img.jpg'
import DashboardCharts from './Dashchart';
import DashboardOverview from './Dashbordabout';
import Dashboard from './Dashboard';
import sachin from '../../assets/sachin.jpg'

function Dashboard01() {
    return (
        <div className=''>
                  <div className="w-full">
                {/* Sidebar */}


                {/* Main Content */}
                <main className="flex-1 p-8 items-center-safe">
                    {/* Header */}
                    <div className="flex justify-between items-center">
                        <input type="text" placeholder="Search" className="border rounded px-4 py-2 w-1/4 border-gray-300" />
                        <div className="flex items-center gap-4">
                            <div className="relative">
                                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1">2</span>
                                {/* <i fa FaBell className="text-gray-600 text-xl" /> */}
                            </div>
                            <img
                                src={sachin}
                                className="w-10 h-10 rounded-full"
                                alt="user"
                            />
                        </div>
                    </div>

                    <div className="relative p-7 mt-12 rounded-lg overflow-hidden h-65 flex items-center justify-start bg-white shadow">
                        {/* Background Image */}
                        <img
                            src={dashboardimg}
                            alt="Fruits"
                            className="absolute inset-0 w-full h-full object-cover z-0"
                        />

                        <div className="relative z-10 max-w-md">
                            <h2 className="text-4xl mb-3 font-bold text-gray-900">Welcome back! FreshCart</h2>
                            <p className="text-gray-700 mb-2">FreshCart is simple & clean design for developer and designer.</p>
                            <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded cursor-pointer hover:bg-green-700">
                                Create Product
                            </button>
                        </div>
                    </div>



                    {/* Stats Cards */}
                    <div className="grid grid-cols-3 gap-6 mt-8">
                        <div className="bg-white p-6 rounded shadow">
                            <h3 className="text-gray-600">Earnings</h3>
                            <p className="text-2xl font-bold">$93,438.78</p>
                            <span className="text-sm text-gray-500">Monthly revenue</span>
                        </div>
                        <div className="bg-white p-6 rounded shadow">
                            <h3 className="text-gray-600">Orders</h3>
                            <p className="text-2xl font-bold">42,339</p>
                            <span className="text-sm text-gray-500">35+ New Sales</span>
                        </div>
                        <div className="bg-white p-6 rounded shadow">
                            <h3 className="text-gray-600">Customer</h3>
                            <p className="text-2xl font-bold">39,354</p>
                            <span className="text-sm text-gray-500">30+ new in 2 days</span>
                        </div>
                    </div>

                    {/* Buy Now Button */}
                    <button className="fixed bottom-5 right-5 bg-gray-800 text-white px-4 py-2 rounded shadow flex items-center gap-2">
                        <FaShoppingCart /> Buy Now
                    </button>

                </main>

                <DashboardCharts />
                <DashboardOverview />
            </div>

        </div>
    )
}

export default Dashboard01
