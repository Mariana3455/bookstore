import React, {useEffect, useState} from "react";
import {data} from "autoprefixer";
import { Card } from "flowbite-react";

const Shop = ()=>{
    const [books, setBooks]= useState([])

    useEffect(()=>{
        fetch("http://localhost:4040/allBooks")
            .then(res => res.json().then(data=>setBooks(data)))
    },[])
    return(
        <div className='mt-28 px-4 lg:px24'>
            <h2 className='text-5xl font-bold text-center'>All Books are Here</h2>
            <div className='grid gap-8 my-12 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1'>
                {books.map((book, index) => (
                    <Card key={index}>
                        <div className="h-full flex flex-col justify-start">
                            <img
                                src={book.imageURL}
                                alt=''
                                className='h-auto max-h-160 object-contain'
                            />
                            <div className="p-4">
                                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    <p>{book.bookTitle}</p>
                                </h5>
                                <p className="font-normal text-gray-700 dark:text-gray-400">
                                    {book.bookDescription}
                                </p>
                            </div>
                        </div>
                        <button className='bg-blue-950 font-semibold text-white py-2 rounded'>Buy Now</button>
                    </Card>
                ))}
            </div>
        </div>
    )
}
export default Shop