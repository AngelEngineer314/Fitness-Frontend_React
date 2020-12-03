import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import circleLineWhite from '../../../assets/images/bg/circle-line-w.png'
import videoImage from '../../../assets/images/bg/video-img.png'
import playIcon from '../../../assets/images/bg/play-icon.png'

export default function WatchUs(props) {
    
    return (
        <section className="video fix p-relative" style={{background: '#8368FF'}}>
            <div className="parolx-text-left">Watch Us</div>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="section-title mb-50">
                            <h2>Performance Testing At Home</h2>
                            <img src={circleLineWhite} alt="circle" />
                        </div>
                        <p>Benchmark’s Metabolic Analysis System offers you clinically accurate measurements of your metabolic, heart, lung, and cellular fitness in less than 10 minutes. We have also teamed that up with precision 3D body measurements and our metabolic based nutrition </p>
                        <p>This is the valley’s first all-in-one mobile system offering hyper-personalized fitness analysis, nutrition plans, and progress tracking.</p>
                    </div>
                    <div className="col-lg-6">
                        <div className="s-d-img p-relative">
                            <img src={videoImage} alt="img" />
                            <a href="https://www.youtube.com/watch?v=vKSA_idPZkc" className="video-i popup-video"> 
                                <img src={playIcon} alt="img" className="active-icon" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}