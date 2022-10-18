import React from 'react';
import { Link } from 'react-router-dom';
import image from '../../ema-john-resources/images/online-shopping-concept-landing-page_52683-22153.webp'
import './Home.css';

const Home = () => {
    return (
        <div className='home-container'>
            <div>
                <h1>New Collection For Fall</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, at nihil veritatis optio mollitia non voluptas totam ipsum, nemo odio ut ab expedita culpa adipisci amet accusantium! Porro, delectus modi.</p>
                <button> <Link to='/shop'>Shop Now</Link> </button>
            </div>
            <div>
                <img src={image} alt="" />
            </div>
        </div>
    );
};

export default Home;