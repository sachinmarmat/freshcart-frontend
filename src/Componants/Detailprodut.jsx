// ProductDetails.jsx
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { useLocation, useNavigate, useParams } from 'react-router-dom';




const sizes = ['250g', '500g', '1kg'];

export default function ProductDetails() {

  const [selectedSize, setSelectedSize] = useState('250g');
  const [quantity, setQuantity] = useState(1);

  const handleSizeClick = (size) => setSelectedSize(size);
  const handleQtyChange = (type) => {
    setQuantity(prev => type === 'inc' ? prev + 1 : prev > 1 ? prev - 1 : 1);
  };


  const location = useLocation()
  const productstatedata = location.state?.productstate


  const go = useNavigate();




  let cartbtn = (product) => {
    const cartItem = {
      Productname: product.Productname,
      Category: product.Category,
      image: product.image,
      sellprice: product.sellprice,
      "quantity": 1
    };

    axios.post("https://freshcart-backend-am1p.onrender.com/addtocart", cartItem)
      .then((res) => {
        if (res.data.status) {
          alert("Added to cart successfully!");
        } else {
          alert("Failed to add to cart");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="p-6 max-w-7xl mt-10 mx-auto grid grid-cols-1 md:grid-cols-2 gap-20">
      {/* Left: Product Image + Thumbnails */}
      <div className="space-y-15">
        {/* {console.log(productstatedata)}  */}
        <img
          src={productstatedata.image}
          alt="Main Product"
          className="rounded-xl shadow-xl w-full"
        />
        <div className="flex gap-5 shadow-initial">
          {[1, 2, 3].map((_, i) => (
            <img
              key={i}
              src={productstatedata.image}
              alt={`Thumb ${i}`}
              className="w-20 h-20 object-cover rounded border cursor-pointer"
            />
          ))}
        </div>
      </div>

      {/* Right: Product Info */}
      <div className="space-y-4">
        <p className="text-sm text-green-600 font-semibold">{productstatedata.category}</p>
        <h1 className="text-2xl font-bold">{productstatedata.Productname}</h1>

        {/* Rating */}
        <div className="flex items-center gap-2">
          <div className="flex text-yellow-500">
            {[...Array(4)].map((_, i) => (
              <FaStar key={i} />
            ))}
          </div>
          <span className="text-sm text-gray-500">(4 reviews)</span>
        </div>

        {/* Pricing */}
        <div className="text-xl">
          <span className="text-green-600 font-bold mr-2">${productstatedata.price}</span>
          <span className="line-through text-gray-400 mr-2">${productstatedata.sellprice}</span>
          <span className="text-red-600">10% Off</span>
        </div>

        {/* Sizes */}
        <div className="flex gap-3 mt-6">
          {sizes.map(size => (
            <button
              key={size}
              className={`px-4 py-1 border rounded ${selectedSize === size ? 'bg-green-100 border-green-600' : ''
                }`}
              onClick={() => handleSizeClick(size)}
            >
              {size}
            </button>
          ))}
        </div>

        {/* Quantity & Add to Cart */}
        <div className="flex items-center gap-4 mt-4">
          <div className="flex items-center border px-2 rounded">
            <button onClick={() => handleQtyChange('dec')} className="px-2 text-lg">-</button>
            <span className="px-3">{quantity}</span>
            <button onClick={() => handleQtyChange('inc')} className="px-2 text-lg">+</button>
          </div>

          <button className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition " onClick={() => cartbtn(productstatedata)} >
            Add to cart
          </button>
          <i className="fa-regular fa-heart text-gray-600 hover:text-white hover:bg-green-600 cursor-pointer ml-1 mr-1 bg-gray-200 p-3 rounded "
            // onClick={(e) => {
            //   e.stopPropagation(); // Prevents parent div's onClick
            //   go('/Addcart');
            // }}
              ></i>

        </div>


        {/* Product Details */}
        <div className="mt-12 space-y-4 text-sm text-gray-600">
          <p><strong>Type:</strong> {productstatedata.Category}</p>
          <p><strong>Availability:</strong> {productstatedata.units}</p>
          <p><strong>Product Discription:</strong>  {productstatedata.description}</p>
          <p><strong>Shipping:</strong> 01 day shipping (Free pickup today)</p>
        </div>
      </div>
    </div>
  );
}
