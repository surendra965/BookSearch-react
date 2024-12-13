import React from 'react';
import "./About.css";
import aboutImg from "../../images/about-img.jpg";

const About = () => {
  return (
    <section className='about'>
      <div className='container'>
        <div className='section-title'>
          <h2>About</h2>
        </div>

        <div className='about-content grid'>
          <div className='about-img'>
            <img src = {aboutImg} alt = "" />
          </div>
          <div className='about-text'>
            <h2 className='about-title fs-26 ls-1'>About BookHub</h2>
            <p className='fs-17'>Welcome to BookHub, your ultimate destination for discovering and exploring the world of books. Whether you're looking for bestsellers, timeless classics, or hidden gems, our platform makes it easy to find the perfect read for your taste. With a vast collection of genres and an intuitive search engine, you can easily browse, compare, and discover books that inspire, educate, or entertain.</p>
            <p className='fs-17'>At BookHub, we believe that every book has a story to tell, and every reader deserves the chance to find that story. Our mission is to connect readers with books that resonate with them, all while providing a seamless and enjoyable search experience. Join our community of book lovers today and start your next reading adventure with BookHub!</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
