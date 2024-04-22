import React, {useState} from "react";
import {Button, Checkbox, Label, Select, Textarea, TextInput} from "flowbite-react";
const UploadBook = () => {
    const bookCategories = [
        "Fiction",
        "Mystery",
        "Romance",
        "Fantasy",
        "SiFi Fiction",
        "Horror",
        "Autobiography",
        "History"
    ];
    const [selectedCategory, setCategory] = useState(bookCategories[0]);

    const handleBookSubmit = (event) => {
        event.preventDefault();

        const form = event.target;
        const bookTitle = form.bookTitle.value;
        const authorName = form.authorName.value;
        const imageURL = form.imageURL.value;
        const bookDescription = form.bookDescription.value;
        const bookPDFURL = form.bookPDFURL.value;
        if (!bookTitle || !authorName || !imageURL || !bookDescription || !bookPDFURL) {
            alert("Please fill in all fields.");
            return;
        }

        const bookObj = {
            bookTitle,
            authorName,
            imageURL,
            category: selectedCategory,
            bookDescription,
            bookPDFURL
        };

        fetch("http://localhost:4040/uploadBook", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(bookObj)
        })
            .then(res => {
                if (!res.ok) {
                    throw new Error('Failed to upload book.');
                }
                return res.json();
            })
            .then(data => {
                alert("Book added successfully.");
                form.reset();
            })
            .catch(error => {
                alert("Error: " + error.message);
            });
    };

    const handleChangeInCategory = (event) => {
        setCategory(event.target.value);
    }

    return(
        <div className='px-4 my-12'>
            <h2 className='mb-8 text-3xl font-bold'>
                Upload a Book
            </h2>
            <form onSubmit={handleBookSubmit} className="flex lg:w-[1180px] flex-col flex-wrap gap-4">
                <div className='flex gap-8'>
                    <div className=' lg:w-1/2'>
                        <div className="mb-2 block">
                            <Label htmlFor="bookTitle" value="Book Title" />
                        </div>
                        <TextInput id="bookTitle" type="text" placeholder="Book Title" required />
                    </div>

                    <div className=' lg:w-1/2'>
                        <div className="mb-2 block">
                            <Label htmlFor="authorName" value="Author Name" />
                        </div>
                        <TextInput id="authorName" type="text" placeholder="Author Name" required />
                    </div>
                </div>

                <div className='flex gap-8'>
                    <div className=' lg:w-1/2'>
                        <div className="mb-2 block">
                            <Label htmlFor="imageURL" value="Image URL"/>
                        </div>
                        <TextInput id="imageURL" type="text" placeholder="Image URL" required/>
                    </div>

                    <div className=' lg:w-1/2'>
                        <div className="mb-2 block">
                            <Label htmlFor="inputState" value=" Book Category"/>
                        </div>
                        <Select id='inputState' name='bookCategory' className='w-full rounded' value={selectedCategory} onChange={handleChangeInCategory}>
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
                        <Textarea id="bookDescription" type="text" placeholder="Write Book Description" required rows={5} className='w-full' />
                    </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="bookPDFURL" value="Book PDF" />
                    </div>
                    <TextInput id="bookPDFURL" type="text" placeholder="Book PDF" required />
                </div>
                <button type='submit'  className="justify-center h-10 bg-green-500 text-white rounded-lg ">Upload Book</button>


            </form>
        </div>
    )
}
export default UploadBook