import React from 'react'
import '../css/body.css'

import headphone_img1 from '../res/headphone_1.png'
import headphone_img2 from '../res/headphone-2.png'
import video from '../res/ad.mp4'

import arrow_left from '../res/arrow-left.svg'
import arrow_right from '../res/arrow-right.svg'
import logo from '../res/logo.svg';

import { useState } from 'react'

function body() {

    return (
        <div className="body">
            <div className="left_body">
                <div className="left_side_text_area">
                    <span className="left_side_text1">THE BEST CHOICE</span>
                    <span className="left_side_text2">Beats Studio Wireless</span>
                    <span className="left_side_text3">Almost before we knew it, we had left the ground. I watched the storm, so beautiful, yet so terrific</span>

                    <div className="video_area">
                        <iframe className="video_view" src={video}/>
                    </div>

                </div>
            </div>

            <div className="right_body">
                <div className="display_headphone">
                    <img src={headphone_img1} className="headphone"/>
                </div>
                <div className="movement_btn_holder">
                    <img classname="movement_icon" src={logo} />
                    <img className="movement_icon" src={logo} />
                </div>

                <span className="right_img_caption">Use It Everywhere</span>
                <span className="right_msg">Originally unveiled in 2007 for the iPhone, iOS has been extended to support other Apple devices such as the iPod Touch(September 2007) and the iPad (January 2010). As of March2018, Apple's App Store contains more than 2.1million iOS applications, 1 million of which are native for iPads. These mobile aplls have colectively been downloaded more than 130 billion times.</span>
            </div>
        </div>
    )
}

export default body
