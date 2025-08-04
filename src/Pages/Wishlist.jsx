import React, { useEffect, useState } from 'react';
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle, TransitionChild } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Wishlist({ onClose }) {

  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    carttodata()
  }, [])


  let carttodata = () => {
    axios.get("http://localhost:5151/addtocart").then((res) => {
      if (res.data.status) {
        setCartItems(res.data.cartdata)
      }
    }).catch((err) => {
      console.log(err)
    })
  }





  // removeproduct------------
  let removeitem = (item) => {
    axios.post("http://localhost:5151/removeitem", item).then((res) => {
      if (res.data.status) {
        alert(res.data.msg)

        window.location.reload()
      }
    }).catch((err) => {
      console.log(err)
    })

  }



  console.log(cartItems)



  // totalamount--------------
  let totalamount=cartItems.reduce((total,item)=>{
     return total+ (item.sellprice*item.quantity)
  },0)


 


  let CARTITEM = ({ mydata }) => {

    // quantity : ---------------
    let [Quantity,setQuantity]=useState(mydata.quantity)


    let increase=()=>{
      setQuantity(++Quantity)
      axios.post("http://localhost:5151/updatequantity",{mydata,Quantity})
    }

    
    let decrease=()=>{
      setQuantity(--Quantity)
      axios.post("http://localhost:5151/updatequantity",{mydata,Quantity})
    }





   

    return (
      <>
        <div className="flex gap-4 items-center border-b-gray-600 p-2 rounded shadow-sm">
          <img src={mydata.image} className="w-16 h-16 rounded object-cover" />
          <div className='flex justify-between gap-8 items-center'>
            <div className=''> <h4 className="font-semibold">{mydata.Productname}</h4>
              <button className="text-sm text-gray-400 font-medium  corser:hover" onClick={() => removeitem(mydata)}> Remove</button>
            </div>
            <div className="flex items-center gap-1 pl-23">
              <div className="flex items-center  rounded">
                <button className="px- text-lg" onClick={decrease}>-</button>
                <span className="px-3">{Quantity}</span>
                <button className="px- text-lg" onClick={increase}>+</button>
              </div></div>

            <div className=''>    <p className="text-green-600 font-bold">${mydata.sellprice*Quantity}</p></div>
          </div>
        </div>


      </>
    )
  }





   // checkout -------------------
   let go= useNavigate();
   let checkout=()=>{
      go("/Checkout",{state:totalamount})
    }




  return (
    <Dialog open={true} onClose={onClose} className="relative z-10">
      <DialogBackdrop className="fixed inset-0 bg-gray-500/75 transition-opacity" />
      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16">
            <DialogPanel className="pointer-events-auto relative w-screen max-w-lg transform bg-white shadow-xl transition-all">
              <TransitionChild>
                <div className="absolute top-0 left-0 -ml-8 flex pt-4 pr-2 sm:-ml-10 sm:pr-4">
                  <button
                    type="button"
                    onClick={onClose}
                    className="rounded-md text-gray-300 hover:text-white focus-visible:ring-2 focus-visible:ring-white"
                  >
                    <span className="sr-only">Close panel</span>
                    <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                  </button>
                </div>
              </TransitionChild>
              <div className="flex flex-col overflow-y-auto py-6 px-4 sm:px-6">
                <DialogTitle className="text-lg font-bold text-gray-900">🛒 Shop Cart  {totalamount}</DialogTitle>
                <DialogTitle className="text-sm font-medium text-gray-500 border-b border-gray-200 pb-5">Location in 324678</DialogTitle>

                <p className='border border-red-300 bg-red-200 rounded-md p-1 pl-2  w-full mt-4'>You've got FREE Delivare. Start <span className='font-bold text-sm'>Chackout now!</span> </p>

                <div className="mt-6 space-y-2">
                  {cartItems.map((item, index) => (
                    <>
                      <CARTITEM mydata={item} />
                    </>
                  ))}
                </div>


                <div className='flex justify-between mt-8'>
                  <button className='border bg-green-600 pl-3 pr-3 p-2 text-white rounded-2xl'>Continue Shoping</button>
                  <button className='border bg-gray-800 pl-3 pr-3 p-2 text-white rounded-2xl' onClick={checkout}>Process to Checkout</button>
                </div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </div>
    </Dialog>
  );
}

export default Wishlist;
