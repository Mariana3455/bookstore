import React, {useEffect, useState} from "react";
import BookCards from "../components/BookCards.jsx";

const FavoriteBooks = ()=>{
    const [books, setBooks]= useState([]);
    useEffect(()=>{
        fetch('http://localhost:4040/allBooks')
            .then(res => res.json()
                .then(data=> setBooks(data.slice(0,8))))
    },[])
    return(
        <div>
            <h2 className='text-5xl font-bold leading-snug text-blackflex flex flex-col items-center mt-5'>Best Seller Books</h2>
            <BookCards books={books}/>
        </div>
    )
}
export default FavoriteBooks