import React from "react";
import {useLoaderData} from "react-router-dom";
import {FaStar} from "react-icons/fa6";
const SingleBook= () => {
    const {_id, bookTitle, authorName, imageURL, category, bookDescription, bookPDFURL} = useLoaderData();

    return (
        <div className='my-36 px-11 h-full w-full'>

        <div className='flex bg-yellow-400 p-8 rounded-lg shadow-lg'>
            <div className='flex-none'>
                <img src={imageURL} alt='' className='h-auto w-64 object-cover rounded-lg' />
            </div>
            <div className='ml-8'>
                <h2 className='text-4xl font-bold'>{bookTitle}</h2><br/>
                <p  className='font-medium'><span></span> {authorName}</p><br/>
                <div className='text-red-800 flex gap-2'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                </div>
                <p className='mt-4'>{bookDescription}</p><br/>
                <p className='font-medium'><span ></span> {category}</p>
                <div className='mt-4'>
                    <button  className='bg-green-800 text-white font-semibold px-6 py-3 rounded hover:bg-yellow-950 transition-all duration-300'>Download PDF</button>
                </div>
            </div>
        </div>
            </div>

    )
}

export default SingleBook;

