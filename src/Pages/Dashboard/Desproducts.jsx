import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';



function Desproducts() {
    const [selectedItems, setSelectedItems] = useState([]);

    const handleCheckboxChange = (id) => {
        if (selectedItems.includes(id)) {
            setSelectedItems(selectedItems.filter((item) => item !== id));
        } else {
            setSelectedItems([...selectedItems, id]);
        }
    };

    const handleDelete = (id) => {
        alert(`Delete item with id ${id}`);
    };

    let [productdata, setproductdata] = useState([]);

    

    useEffect(() => {

        axios.get("https://freshcart-backend-am1p.onrender.com/allproduct").then((res) => {
            if (res.data.status) {
                setproductdata(res.data.ourproduct);
            }
        })
            .catch((err) => {
                console.log("API error:", err);
            });
    }, []);





    return (
        <>
            {/* <Navbar /> */}
            <div className='container m-auto ml-5 mt-5'>

                <div className='flex justify-between mr-15 items-center mb-5'>
                    <div className='ml-7'>  <h2 className='text-3xl font-medium'>Products</h2>
                        <h2 className='font-medium text-gray-700 mt-1 hover:text-green-800'><Link to="/Dashboard"> Dashboard</Link>  / <span className='hover:text-green-600 text-gray-400'>Products</span></h2></div>
                    <Link to="/ProductForm">
                        <button className=' bg-green-500 rounded cursor-pointer hover:bg-green-600 p-3 mb-6 mt-6 font-medium text-right'>
                            Add Product
                        </button>
                    </Link>
                </div>


                {productdata.map((data) => (

                    
                    <div key={data.id} className='flex justify-between items-center py-3 px-4 border-b border-gray-400 shadow-gray-200'>
                        <input
                            type="checkbox"
                            checked={selectedItems.includes(data.id)}
                            onChange={() => handleCheckboxChange(data.id)}
                        />

                        <div className='w-1/4 flex items-center gap-8 ml-10'>
                            <img className='w-16' src={data.image} alt={data.name} />
                            <h3>{data.name}</h3>
                        </div>

                        <h3 className='w-1/6 text-center'>{data.price}</h3>
                        <h3 className='w-1/6 text-center'>{data.sellprice}</h3>
                        <h3 className='w-1/6 text-center'>{data.Category}</h3>

                        <div className='w-1/6 text-center'>
                            <button className="bg-green-600 text-white px-2 py-1 cursor-pointer rounded hover:bg-green-700">
                                Add to Cart
                            </button>
                        </div>

                        <div className='w-1/6 text-center'>
                            <i
                                className="fas fa-trash text-gray-500 cursor-pointer hover:text-red-700"
                                onClick={() => handleDelete(data.id)}
                            ></i>
                        </div>
                    </div>
                ))}


            
            </div ></>
    );
}

export default Desproducts;
