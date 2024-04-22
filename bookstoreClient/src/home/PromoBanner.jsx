import React from "react";
import {Link} from "react-router-dom";
import bookImg from "../assets/bookCoversForBannerCard/bookForPromoCode.jpeg"

const PromoBanner = ()=>{
    return(
        <div className='py-12 bg-green-800 px-4 lg:px-24'>
            <div className='flex flex-col md:flex-row justify-between items-center gap-12'>
            <div className='md: w-1/2'>
                <h2 className='text-4xl font-bold mb-6 leading-snug text-amber-400'>2024 National Book Awards For Fiction </h2>
                <Link to='/shop' className='mt-12 block'>
                    <button className='bg-amber-600 text-black font-semibold px-6 py-3 rounded hover:bg-amber-800 transition-all duration-300'>Get Promo Code</button>
                </Link>
            </div>
                <img src={bookImg} alt="" className='w-96 rounded-2xl'/>
            </div>
        </div>
    )
}
export default PromoBanner