import React from "react";
import Banner from "../components/Banner.jsx";
import FavoriteBooks from "./FavoriteBooks.jsx";
import FavoriteBooksSection from "./FavoriteBooksSection.jsx";
import PromoBanner from "./PromoBanner.jsx";
import OtherBooks from "./OtherBooks.jsx";
import Review from "./Review.jsx";
import MyFooter from "../components/MyFooter.jsx";


const Home = () => {
    return (
        <div className=''>
            <Banner/>
            <FavoriteBooks/>
                <div className='bg-amber-600'>
                    <FavoriteBooksSection/>
                    <PromoBanner/>
                    </div>
                <OtherBooks/>
                <Review/>

        </div>
    )
}

export default Home;
