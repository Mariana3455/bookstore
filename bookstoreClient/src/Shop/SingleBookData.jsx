import React from "react";
import {useLoaderData, useRouteLoaderData} from "react-router-dom";

const SingleBookData = ()=>{
    const {_id, bookTitle, imageURL, body,category} = useLoaderData()
    return(
        <div className='mt-28  px-4 lg:px-24'>
            <h2>{bookTitle}</h2>
        </div>
    )
}
export default SingleBookData