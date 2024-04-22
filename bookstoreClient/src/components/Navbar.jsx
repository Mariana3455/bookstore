import React, {useContext, useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {FaBookBookmark} from "react-icons/fa6";
const Navbar = ()=>{
    const [isMenuOpen, setIsMenuOpen]= useState(false);
    const [isSticky, setIsSticky]= useState(false);


    const  toggleMenu = () =>{
        setIsMenuOpen(true)
    }
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    //navItems

    const  navItems = [
        {link: "Home", path:"/"},
        {link: "About", path:"/about"},
        {link: "Shop", path:"/shop"},
        {link: "Sell Book", path:"/admin/dashboard"},
        {link: "Blog", path:"/blog"},
    ]
    return(
        <header className='w-full bg-transparent fixed top-0 right-0 transition-all ease-in duration-300'>
            <nav className={`py-4 lg:px-24 px-4 ${isSticky ? "sticky top-0 left-0 right-0 bg-amber-300" : ""}`}>
                <div className='flex justify-between items-center text-base gap-8'>
                    <Link to="/" className="text-2xl font-bold text-yellow-500"><FaBookBookmark className="inline-block"/>Books</Link>

                   {/*це менюшка з блогом і іншими штуками(додати сюди рекомендовані книги)*/}
                    <ul className='md:flex space-x-12 hidden'>
                        {navItems.map(({link, path}) => <Link key={path} to={path} className='block text-base text-yellow-500 uppercase cursor-pointer hover:text-amber-600'>{link}</Link>)
                        }
                    </ul>
                </div>
            </nav>
        </header>
    )
}
export default Navbar