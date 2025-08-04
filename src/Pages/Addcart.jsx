import React, { useEffect, useState } from 'react'
// import { Wishlistjson } from '../Componants/Jsonwishlist'
import axios from 'axios'


function Addcart() {


    const [wishlistdata, setwishlist] = useState([]);

    
    const [selectedItems, setSelectedItems] = useState([])
    
    // const productList = wishlistdata.product
    // const isAllSelected = selectedItems.length === productList.length

    const handleCheckboxChange = (id) => {
        setSelectedItems((prevSelected) =>
            prevSelected.includes(id)
                ? prevSelected.filter((itemId) => itemId !== id)
                : [...prevSelected, id]
        )
    }

    // const handleSelectAll = () => {
    //     if (isAllSelected) {
    //         setSelectedItems([])
    //     } else {
    //         const allIds = productList.map((item) => item.id)
    //         setSelectedItems(allIds)
    //     }
    // }

    const handleDelete = (id) => {
        alert(`Delete item with ID: ${id}`)
        // Implement your delete logic here
    }




    useEffect(() => {
        addwishlistdata();
    }, [])

    let addwishlistdata = () => {
        axios.get("http://localhost:5151/addwishlist").then((res) => {
            if (res.data.status) {
                setwishlist(res.data.wishlistdatas)
            }
        }).catch((err) => {
            console.log(err)
        })
    }



    return (
        <div className='container m-auto'>
            <div className='mb-8 mt-12'>
                <h1 className="text-4xl font-bold mb-3">My Wishlist</h1>
                {/* <p>There are {productList.length} Products in my Wishlist</p> */}
            </div>

            {/* Header Row */}
            <table className='w-full'>
                <thead className=''   >
                    <tr className='flex justify-between font-bold py-3 px-5 bg-gray-100 rounded-t'>
                        <th>
                            <input
                                type="checkbox"
                                // checked={isAllSelected}
                                // onChange={handleSelectAll}
                                 />
                        </th>
                        <th className='w-1/4 text-center'>Products</th>
                        <th className='w-1/6 text-center'>Amount</th>
                        <th className='w-1/6 text-center'>Category</th>
                        <th className='w-1/6 text-center'>Action</th>
                        <th className='w-1/6 text-center'>Remove</th>
                    </tr>

                </thead>
                <tbody>
                    {wishlistdata.map((data) => (
                        <tr key={data.id} className='flex justify-between text-gray-600 text-sm items-center py-3 px-4 border-b border-gray-400 shadow-gray-200'>

                            <th><input
                                type="checkbox"
                                checked={selectedItems.includes(data.id)}
                                onChange={() => handleCheckboxChange(data.id)}
                            />
                            </th>


                            <th className='w-1/5 font-medium flex items-center gap-8 ml-10'>
                                <img className='w-16' src={data.image} alt="img" />
                                <div><h3>{data.Productname}</h3><p className='text-gray-500 font-xs'></p></div>
                            </th>

                            <th className='w-1/6 text-center font-medium'>
                                {data.sellprice}</th>
                            <th className='w-1/6 text-center  font-medium'>{data.Category}</th>

                            <th className='w-1/6 text-center font-medium'>
                                <button className="bg-green-600 text-white px-2 py-1 cursor-pointer rounded hover:bg-green-700">
                                    Add to Cart
                                </button>
                            </th>

                            <th className='w-1/6 text-center'>
                                <i
                                    className="fas fa-trash text-gray-500 cursor-pointer hover:text-red-700"
                                    onClick={() => handleDelete(data.id)}
                                ></i>
                            </th>
                        </tr>
                    ))}
                </tbody>
            </table>


        </div>
    )
}

export default Addcart
