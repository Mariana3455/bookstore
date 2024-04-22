import React from "react";
import FavBookImg from "/Users/marianadekhtiarenko/Desktop/bookstore/bookstoreClient/src/assets/bookCoversForBannerCard/favbooks.png"
import {Link} from "react-router-dom";
const FavoriteBooksSection = () => {
    return (
        <div className='px-4 my-20 flex flex-row justify-between items-center gap-10'>
            <div className="w-1/2 mt-5">
                <img src={FavBookImg} alt="" className="h-fit w-fit rounded-2xl" />
            </div>
            <div className="w-1/2 space-y-6">
                <h2 className='text-5xl font-bold leading-snug text-yellow-300'>Find Your favorite <span className="text-green-800">Book Here!</span></h2>
                <div className='flex flex-row justify-between gap-6 w-3/4 my-14'>
                    <div>
                        <h3 className='text-3xl font-bold'>800+</h3>
                        <p className='text-lg'>Book Listing</p>
                    </div>
                    <div>
                        <h3 className='text-3xl font-bold'>550+</h3>
                        <p className='text-lg'>Register User</p>
                    </div>
                    <div>
                        <h3 className='text-3xl font-bold'>1200+</h3>
                        <p className='text-lg'>PDF Downloads</p>
                    </div>
                </div>
                <Link to="/shop" className='mt-15 block'><button className='bg-green-800 text-white font-semibold px-6 py-3 rounded hover:bg-yellow-950 transition-all duration-300'>Explore More</button></Link>
            </div>
        </div>
    )
}

export default FavoriteBooksSection;

