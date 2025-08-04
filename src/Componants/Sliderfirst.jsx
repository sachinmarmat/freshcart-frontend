import React, { useRef, useEffect, useState } from "react";
import slide1 from '../assets/slide-1.jpg'
import slide2 from '../assets/slide-2.jpg'


function Slidar() {


    const slides = [
        {
            imgae: slide1,
            text: "Opening Sale Discount 50%",
            text1: " SuperMarket For",
            text3: " Fresh Grocery",
            text2: "  Introduced a new model for online grocery shopping",
            text4: " and convenient home delivery.",
            button: 'Shope Now'
        },
        {
            imgae: slide2,
            text: "Free Shipping - orders over $100",
            text1: " Free Shipping on",
            text3: " orders over",
            text2: "   Free Shipping to First-Time Customers Only, After",
            text4: "  promotions and discounts are applied.",

            button: 'Shope Now'

        },

    ]
    const [currentIndex, setcurrentIndex] = useState(0)
    useEffect(() => {
        const intervel = setInterval(() => {
            setcurrentIndex((prev) => (prev + 1) % slides.length)
        }, 3000)

        return () => clearInterval(intervel)

    }, [])


    return (
        <>

            <div className="container m-auto relative h-135 w-full overflow-hidden rounded-2xl mt-14">
                <div className="absolute inset-0 bg-cover bg-center z-0  "
                    style={{ backgroundImage: `url(${slides[currentIndex].imgae})` }} >
                </div>

                <div className="detail relative z-10 p-8 detail mt-20 pl-15">
                    <h1 className="border-amber-50 bg-amber-400 rounded-2xl text-[11px] pl-1 pr-1 font-bold inline-block">{slides[currentIndex].text}</h1>
                    <h1 className='font-bold text-5xl mt-4'>{slides[currentIndex].text1}</h1>
                    <h1 className='font-bold text-5xl mt-4'>{slides[currentIndex].text3}</h1>
                    <div className="text-gray-600 text-[20px] mt-3 mb-7" >  <h1>{slides[currentIndex].text2}</h1>
                        <h1>{slides[currentIndex].text4}</h1></div>
                    <a className="bg-blue-950  inline-block p-2 rounded-md text-white font-bold text-[15px] pr-3"><button >{slides[currentIndex].button}</button>
                        <i className="fa-solid fa-arrow-right pl-2"></i></a>
                </div>
            </div>

        </>
    )
}
export { Slidar }