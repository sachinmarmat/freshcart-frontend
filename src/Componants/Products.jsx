import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';



function Products() {

    const [productdata, setproductdata] = useState([]);
    const go = useNavigate();


    const productnavigate = (productstate) => {
        go('/productdetails', { state: { productstate } })
    }
    const wishlistnavigate = (wishliststate) => {
        go('/Addcart', { state: { wishliststate } })
    }


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



    let Wishlistbtn = (product) => {
        const wishlistitem = {
            Productname: product.Productname,
            Category: product.Category,
            image: product.image,
            sellprice: product.sellprice,
            "quantity": 1
        };

        axios.post("http://localhost:5151/addwishlist", wishlistitem)
            .then((res) => {
                if (res.data.status) {
                    alert("Added to wishlist successfully!");
                    wishlistnavigate(product); // Navigate after success
                } else {
                    alert("Failed to add to wishlist");
                }

            })
            .catch((err) => {
                console.log(err);
            });
    };





    return (
        <>
            <div className='container m-auto '>
                <h1 className='text-3xl font-medium mt-15 mb-6'>Popular Products</h1>

                <div className=' flex flex-wrap gap-3'>
                    {productdata.map((data) => {
                        return (
                            <>

                                <div className='border m-auto max-w-auto w-60 p-4 relative border-gray-300 rounded-2xl hover:border-green-700 hover:shadow-xl'
                                    onClick={() => productnavigate(data)}
                                >
                                    <div className='relative group'>
                                        <div className='text-sm absolute '>
                                            <span className='bg-red-600 text-white rounded text-sm pr-1 pl-1 font-medium '>Sale</span><br />
                                            <span className='bg-green-700 rounded pl-1 pr-1 text-sm text-white'>{data.sellprice}%</span>
                                        </div>

                                        <div className='absolute gap-2 opacity-0 group-hover:opacity-100 transition-opacity top-33 ml-14 hover:shadow-sm shadow-xl'>
                                            <i className="fa-regular fa-eye text-gray-500 hover:text-white hover:bg-green-600 cursor-pointer  bg-white p-2 rounded "
                                            >  </i>
                                            <i className="fa-regular fa-heart text-gray-500 hover:text-white hover:bg-green-600 cursor-pointer ml-1 mr-1 bg-white p-2 rounded "
                                                onClick={() => Wishlistbtn(data)}
                                            ></i>
                                            <i className="fa-solid fa-arrow-right-arrow-left text-gray-500 hover:text-white hover:bg-green-600 cursor-pointer  bg-white p-2 rounded "></i>

                                        </div>
                                        <img className='cursor-pointer pb-4' src={data.image} />

                                    </div>
                                    <h1 className='text-gray-400 text- mb-1 cursor-pointer'>{data.Productname}</h1>
                                    <h1 className='font-medium hover:text-green-800 cursor-pointer'>{data.Category}</h1>

                                    <div className='flex mt-2'>
                                        <i className="fa-solid fa-star text-yellow-400 mr-1 text-sm"></i>
                                        <i className="fa-solid fa-star text-yellow-400 mr-1 text-sm"></i>
                                        <i className="fa-solid fa-star text-yellow-400 mr-1 text-sm"></i>
                                        <i className="fa-solid fa-star text-yellow-400 mr-1 text-sm"></i>
                                        <i className="fa-solid fa-star-half-stroke text-yellow-400 mr-1 text-sm"></i>
                                    </div>

                                    <div className='flex justify-between mt-5'>
                                        <p>${data.price} <span className='text-gray-400 font-sm'>${data.sellprice}</span></p>
                                        <button className='bg-green-600 p-1 rounded text-white pl-2 cursor-pointer hover:bg-green-700'>+ Add</button>
                                    </div>
                                </div>
                            </>
                        )
                    })

                    }
                </div>
            </div>
        </>
    )
}

export default Products
