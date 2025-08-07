import React, { useEffect, useState } from 'react';
import Navbar from '../Componants/Navbar';
import { Link } from 'react-router-dom';
import Dashboard from './Dashboard/Dashboard';
import axios from 'axios';
import Swal from 'sweetalert2';

export default function ProductForm() {
    const [inStock, setInStock] = useState(true);

    let [productdata, setproductdata] = useState({});

    const productapi = (e) => {
        setproductdata(
            { ...productdata, [e.target.name]: e.target.value })
    }

    useEffect(() => {

        allproducts();
    }, []);

    let [getproducts, setgetproducts] = useState([])

    let allproducts = () => {
        axios.get("https://freshcart-backend-am1p.onrender.com/allproduct").then((res) => {
            if (res.data.status) {
                setgetproducts(res.data.ourproduct)
            }
        }).catch((err) => {
            console.log(err)

        })
    }

    let filterproduct = getproducts.filter(data => data.Productname === productdata.Productname)
    let allreadyproduct = filterproduct[0]



    const productbtn = () => {

        if (allreadyproduct) {
            Swal.fire({
                icon: "error",
                title: "alredy product"
            });
        } else {
            axios.post("https://freshcart-backend-am1p.onrender.com/addproducts", productdata).then((res) => {
                if (res.data.status) {
                    Swal.fire({
                        title: res.data.msg,
                        icon: "success"
                    });
                 allproducts(); 

                }
                else {
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
            <div className='flex justify-between '>
                <div className=''><Dashboard /></div>

                <div className='mt-10 w-full'>

                    <div className='flex justify-between mr-15 items-center mb-5'>
                        <div className='ml-7'>  <h2 className='text-3xl font-medium'>Products</h2>
                            <h2 className='font-medium text-gray-700 mt-1 hover:text-green-800'><Link to="/Dashboard"> Dashboard</Link>  / Products
                                <span className='hover:text-green-600 text-gray-400'> / Add Product </span> </h2>
                        </div>
                        <Link to="/dashboard/products">
                            <div className='border border-black p-2 text-center bg-gray-100 inline-block font-medium rounded mt-5 '>
                                <button className='cursor-pointer'> Back to Product  </button>
                            </div></Link>
                    </div>

                    <div className="p-6 bg-gray-50  grid grid-cols-3 gap-6 mt-5 ">
                        {/* Left Side Form */}
                        <div className="col-span-2 space-y-6">

                            {/* Product Info */}
                            <div className="bg-white p-6 rounded shadow">
                                <h2 className="text-xl font-semibold mb-4">Product Information</h2>
                                <div className="grid grid-cols-2 gap-4">

                                    <input type="text" placeholder="Product Name" className="border p-2 rounded w-full" required name="Productname" onChange={productapi} />
                                    <select className="border p-2 rounded w-full " name='Category' required onChange={productapi}>
                                        <option>Product Category</option>
                                        <option>Fruits</option>
                                        <option>Vegetables</option>
                                        <option>Grosary</option>
                                    </select>
                                    <input type="text" placeholder="Weight" className="border p-2 rounded w-full" name='Weight' onChange={productapi} />
                                    <select className="border p-2 rounded w-full" name="units" onChange={productapi}>
                                        <option>Select Units</option>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                    </select>
                                </div>
                            </div>

                            {/* Product Images */}
                            <div className="bg-white p-6 rounded shadow">
                                <h2 className="text-xl font-semibold mb-4">Product Image URL</h2>
                                <input
                                    type="text"
                                    placeholder="Enter image URL"
                                    className="border p-2 rounded w-full"
                                    name="image"
                                    onChange={productapi}
                                />
                            </div>

                            {/* Product Description */}
                            <div className="bg-white p-6 rounded shadow">
                                <h2 className="text-xl font-semibold mb-4">Product Descriptions</h2>
                                <textarea className="border p-2 w-full h-32 rounded" placeholder="Write description here..." name='Description' onChange={productapi}></textarea>
                            </div>
                        </div>

                        {/* Right Sidebar */}
                        <div className="space-y-6">

                            {/* Stock Toggle & SKU */}
                            {/* <div className="bg-white p-6 rounded shadow">
                                <div className="flex justify-between items-center mb-4">
                                    <span className="font-medium">In Stock</span>
                                    <button
                                        onClick={() => setInStock(!inStock)}
                                        className={`w-10 h-5 rounded-full p-1 flex items-center ${inStock ? 'bg-green-500' : 'bg-gray-400'}`}
                                    >
                                        <span className={`bg-white w-3 h-3 rounded-full transform ${inStock ? 'translate-x-5' : ''}`}></span>
                                    </button>
                                </div>

                                <input type="text" placeholder="Enter Product Title" className="border p-2 w-full rounded mb-4" required name="title" />
                                <input type="text" placeholder="Enter Product SKU" className="border p-2 w-full rounded mb-4" />

                                <div>
                                    <label className="font-medium">Status</label>
                                    <div className="flex gap-4 mt-2">
                                        <label><input type="radio" name="status" /> Active</label>
                                        <label><input type="radio" name="status" /> Disabled</label>
                                    </div>
                                </div>
                            </div> */}

                            {/* Product Price */}
                            <div className="bg-white p-6 rounded shadow">
                                <h2 className="text-xl font-semibold mb-4 " required onChange={productapi} >Product Price</h2>
                                <label >Regular price</label>
                                <input type="number" placeholder="$0.00" name="price" onChange={productapi} className="border p-2 w-full rounded mb-4 mt-2 " />
                                <label >Sell price</label>
                                <input type="number" placeholder="$0.00" name='sellprice' onChange={productapi} className="border p-2 w-full rounded mt-2" />
                            </div>

                            <div className='bg-green-600 p-2 w-full  rounded-2xl text-center text-white font-medium text-xl hover:bg-green-700 cursor-pointer'>
                                <button onClick={productbtn}>Create Product</button>
                            </div>



                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
