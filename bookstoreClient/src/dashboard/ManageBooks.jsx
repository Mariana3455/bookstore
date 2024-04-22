import React, {useEffect, useState} from "react";
import {Table} from "flowbite-react";
import {Link} from "react-router-dom";
import {data} from "autoprefixer";
import {FaEdit} from "react-icons/fa";
import {MdDelete} from "react-icons/md";

const ManageBooks = ()=>{
    const [allBooks, setAllBooks]= useState([])
    useEffect(()=>{
        fetch(`http://localhost:4040/allBooks`).then(res => res.json().then(data=> setAllBooks(data)))
    },[])
    const handleDelete = (id) => {
        fetch(`http://localhost:4040/book/${id}`, {
            method: "DELETE",
        })
            .then(res => res.json())
            .then(data => {
                alert('Book is deleted successfully');
                setAllBooks(prevBooks => prevBooks.filter(book => book._id !== id));
            })
            .catch(error => console.error('Error deleting book:', error));
    };

    return(

        <div className="px-4 my-12">
            <h2 className='mb-8 text-3x1 font-bold'>Manage Your Books</h2>

            <Table>
                <Table.Head className="bg-white dark:border-gray-700 dark:bg-gray-800 justify-center">
                    <Table.HeadCell >№</Table.HeadCell>
                    <Table.HeadCell>Title</Table.HeadCell>
                    <Table.HeadCell>Author name</Table.HeadCell>
                    <Table.HeadCell >Category</Table.HeadCell>
                    <Table.HeadCell>Book PDF URL</Table.HeadCell>
                    <Table.HeadCell>
                        <span >Edit</span>
                    </Table.HeadCell>
                </Table.Head>
                <Table.Body>
                    {allBooks.map((book, index) => (
                        <Table.Row key={index} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell>{index+1}</Table.Cell>
                            <Table.Cell>{book.bookTitle}</Table.Cell>
                            <Table.Cell>{book.authorName}</Table.Cell>
                            <Table.Cell>{book.category}</Table.Cell>
                            <Table.Cell>{book.bookPDFURL}</Table.Cell>
                            <Table.Cell  className="flex flex-col items-center justify-center">
                                <Link to={`/admin/dashboard/edit/${book._id}`} className="inline-flex items-center justify-center w-11 h-11 bg-green-500 text-white rounded-lg mb-1">
                                    <FaEdit className="w-6 h-6"/>
                                </Link>
                                <button onClick={()=> handleDelete(book._id)} className="inline-flex items-center justify-center w-11 h-11 bg-red-600 text-white rounded-lg">
                                    <MdDelete className="w-6 h-6"/>
                                </button>
                            </Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table>

        </div>
    )
}
export default ManageBooks