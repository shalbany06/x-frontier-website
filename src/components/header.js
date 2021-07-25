import React from 'react'

import home_icon from '../res/home.svg';
import search from '../res/search.svg';
import logo from '../res/logo.svg';

import '../css/header.css'

function Header() {
    return (
        <div className="header">
            <div className="left_header">
                <img className="header_img" src={home_icon} />
                <img className="header_img" src={logo} />
                <img className="header_img" src={search} />
            </div>

            <div className="right_header">
                <div className="header_text_holder">
                    <span className="header_text">About Us</span>
                </div>
                <div className="header_text_holder">
                    <span className="header_text">Models</span>
                </div>
                <div className="header_text_holder">
                    <span className="header_text">Reviews</span>
                </div>
                <div className="header_text_holder">
                    <span className="header_text">Add to Cart</span>
                </div>
            </div>
        </div>
    )
}

export default Header
