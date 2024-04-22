import React from "react";
import BannerCard from "../home/BannerCard.jsx";
import { Swiper, SwiperSlide } from 'swiper/react';

const Banner = () => {
    return (
        <div className='px-4 lg:px-24 bg-green-800 items-center'>
            <div className='flex w-full justify-between items-center gap-12 py-20'>
                <div className='space-y-8 h-full'>
                    <h2 className='text-5xl font-bold  leading-snug text-yellow-400'>Buy and Sell your books</h2>
                    <div>
                        <input type='search' name='search' id='search' placeholder='Search a book' className='py-2 px-10 rounded-s-sm outline-none' />
                        <button className='bg-blue-700 px-7 py-2 text-white font-medium hover:bg-blue-950 transition-all ease-in duration-200'>Search</button>
                    </div>
                </div>
                <BannerCard/>
            </div>
        </div>
    )
}

export default Banner;

