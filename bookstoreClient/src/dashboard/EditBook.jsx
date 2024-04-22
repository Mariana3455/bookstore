import React, {useState} from "react";
import {useLoaderData, useParams} from "react-router-dom";
import {Label, Select, Textarea, TextInput} from "flowbite-react";

const EditBook = ()=> {
    const  {id}= useParams()
    const {bookTitle, authorName, imageURL, bookDescription, bookPDFURL}= useLoaderData()
    const bookCategories =[
        "Fiction",
        "Mystery",
        "Romance",
        "Fantasy",
        "SiFi Fiction",
        "Horror",
        "Autobiography",
        "History"
    ]
    const [selectedCategory, setCategory] = useState(bookCategories[0]);
    const handleChangeInCategory=(event)=>{
        setCategory(event.target.value);
 }

    const handleBookUpdate= (event)=>{
        const form = event.target;
        const  bookTitle = form.bookTitle.value;
        const  authorName = form.authorName.value;
        const  imageURL = form.imageURL.value;
        const  category = form.category.value;
        const  bookDescription = form.bookDescription.value;
        const bookPDFURL = form.bookPDFURL.value;

        const  updatedBookObj = {
            bookTitle,authorName,imageURL,category,bookDescription, bookPDFURL
        }
        fetch(`http://localhost:4040/book/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedBookObj)
        }).then(res => {
            console.log("Response status:", res.status);
            return res.json();
        }).then(data => {
            console.log("Response data:", data);
            if (res.ok) {
                alert("Book updated successfully");
                form.reset();
            } else {
                throw new Error("Failed to update book");
            }
        }).catch(error => {
            console.error("Error updating book:", error.message);
            alert("Failed to update book. Please try again later.");
        })
    };



    return(

        <div className='px-4 my-12'>
            <h2 className='mb-8 text-3xl- font-bold'>
               Update Book Info
            </h2>
            <form onSubmit={handleBookUpdate} className="flex lg:w-[1180px] flex-col flex-wrap gap-4">
                <div className='flex gap-8'>
                    <div className=' lg:w-1/2'>
                        <div className="mb-2 block">
                            <Label htmlFor="bookTitle" value="Book Title" />
                        </div>
                        <TextInput id="bookTitle" type="text" placeholder="Book Title" required defaultValue={bookTitle}/>
                    </div>

                    <div className=' lg:w-1/2'>
                        <div className="mb-2 block">
                            <Label htmlFor="authorName" value="Author Name" />
                        </div>
                        <TextInput id="authorName" type="text" placeholder="Author Name" required defaultValue={authorName} />
                    </div>
                </div>

                <div className='flex gap-8'>
                    <div className=' lg:w-1/2'>
                        <div className="mb-2 block">
                            <Label htmlFor="imageURL" value="Image URL"/>
                        </div>
                        <TextInput id="imageURL" type="text" placeholder="Image URL" required defaultValue={imageURL}/>
                    </div>

                    <div className=' lg:w-1/2'>
                        <div className="mb-2 block">
                            <Label htmlFor="inputState" value=" Book Category"/>
                        </div>
                        <Select id='inputState' name='category' className='w-full rounded' value={selectedCategory} onChange={handleChangeInCategory}>
                            {bookCategories.map(option => (
                                <option key={option} value={option}>{option}</option>
                            ))}
                        </Select>
                    </div>
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="bookDescription" value="Book Description" />
                    </div>
                    <Textarea id="bookDescription" type="text" placeholder="Write Book Description" required rows={5} className='w-full' defaultValue={bookDescription} />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="bookPDFURL" value="Book PDF" />
                    </div>
                    <TextInput id="bookPDFURL" type="text" placeholder="Book PDF" required  defaultValue={bookPDFURL}/>
                </div>
                <button  className="justify-center h-10 bg-green-500 text-white rounded-lg " type='submit' >Update Book</button>


            </form>
        </div>
    )
}
export default EditBook