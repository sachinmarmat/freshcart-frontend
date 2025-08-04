// Dashboard.jsx
import React from "react";
import { FaBox, FaShoppingCart, FaUsers, FaStar, FaStore, FaCog } from "react-icons/fa";
import { Link, Outlet } from 'react-router-dom';
import Navbar from "../../Componants/Navbar";
import Dashboard01 from "./Dashboard01";
import Desproducts from "./Desproducts";

export default function Dashboard() {
  return (
    <>
      <div className="">
        <Navbar />
        <div className="flex ">
          <aside className=" bg-white shadow-md ">
            <nav className="p-5 ml-6 mr-10 w-60 space-y-6">
              <li className="text-green-700 font-medium bg-green-200 p-3 text-center  rounded-2xl">
                <Link to="/Dashboard">Dashboard</Link>
              </li>
              <div className="text-green-600 font-semibold">Store Managements</div>
              <ul className="space-y-1">
                <li className="flex items-center gap-4 cursor-pointer text-gray-500 hover:bg-gray-200 p-3 hover:text-gray-700 rounded"><FaBox />
                  <Link to="/dashboard/products">Products</Link>
                </li>
                <li className="flex items-center gap-4 cursor-pointer text-gray-500 hover:bg-gray-100 p-3 hover:text-gray-700 rounded"><FaBox /> Categories</li>
                <li className="flex items-center gap-4 cursor-pointer text-gray-500 hover:bg-gray-100 p-3 hover:text-gray-700 rounded"><FaShoppingCart /> Orders</li>
                <li className="flex items-center gap-4 cursor-pointer text-gray-500 hover:bg-gray-100 p-3 hover:text-gray-700 rounded"><FaStore /> Sellers</li>
                <li className="flex items-center gap-4 cursor-pointer text-gray-500 hover:bg-gray-100 p-3 hover:text-gray-700 rounded"><FaUsers />
                  <Link to="/Dashboard/Costumer"> Customers </Link></li>
                <li className="flex items-center gap-4 cursor-pointer text-gray-500 hover:bg-gray-100 p-3 hover:text-gray-700 rounded"><FaStar /> Reviews</li>
                <li className="flex items-center gap-4 cursor-pointer text-gray-500 hover:bg-gray-100 p-3 hover:text-gray-700 rounded"><FaCog /> Menu Level</li>
              </ul>
              <div className="pt-4 text-xs text-gray-400 font-bold">Site Settings <span className="ml-1 bg-blue-100 text-blue-800 px-2 py-0.5 rounded text-xs">Coming Soon</span></div>
              <ul className="space-y-2">
                <li className="text-gray-300 font-medium">Blog</li>
                <li className="text-gray-300 font-medium">Media</li>
                <li className="text-gray-300 font-medium">Store Settings</li>
              </ul>
            </nav>
          </aside>

          {/* Show child page (like Dashboard01) here */}
          <div className="w-full">
            <Outlet />
            {/* <Dashboard01 /> */}

          </div>
        </div>
      </div>
    </>
  );
}
