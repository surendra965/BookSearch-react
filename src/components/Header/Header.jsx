import React from 'react';
import Navbar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";

const Header = () => {
  return (
    <div className='holder'>
        <header className='header'>
            <Navbar />
            <div className='header-content flex flex-c text-center text-white'>
                <h2 className='header-title text-capitalize'>find your book of choice.</h2><br />
                <p className='header-text fs-18 fw-3'>Discover your next great read with BookHub.Explore a vast collection of books from all genres, find recommendations tailored to your interests, and easily track down the books you've been looking for. Start your reading journey today!</p>
                <SearchForm />
            </div>
        </header>
    </div>
  )
}

export default Header