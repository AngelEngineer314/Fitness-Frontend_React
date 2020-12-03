import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import circleLine from '../../../assets/images/bg/circle-line.png'
import blogImage1 from '../../../assets/images/blog/blog_img01.jpg'
import blogImage2 from '../../../assets/images/blog/blog_img02.jpg'
import blogImage3 from '../../../assets/images/blog/blog_img03.jpg'

export default function OurBlogs(props) {
    
    return (
        <section id="blog" className="blog-area  p-relative pt-100 pb-90 fix">
            <div className="parolx-text-right">Our Blog</div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-8 col-lg-10">
                        <div className="section-title text-center mb-80" >
                                <h2>What Our Client Say’s</h2>
                            <img src={circleLine} alt="circle" />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-12">
                        <div className="single-post single-post-box mb-30" >
                            <div className="blog-thumb">
                                <a href="blog-details.html">
                                    <img src={blogImage1} alt="img" />
                                </a>
                                <div className="ct-link">
                                    <a href="#">FITNESS</a>
                                </div>
                            </div>
                            <div className="blog-content">     
                                <div className="b-meta mb-20">
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6">
                                            <i className="far fa-calendar-alt"></i>  7 March, 2019
                                        </div>
                                        <div className="col-lg-6 col-md-6">
                                            <i className="fas fa-user"></i> By Jhone Doe
                                        </div>
                                    </div>
                                </div>
                                <h4><a href="blog-details.html">Praesent justo mauris, tincidunt vitae nisi ultricies.</a></h4>    
                                <p>Integer auctor est nec semper hendrerit. Etiam sollicitudin enim in urna commodo, in dapibus velit elementum.</p>    
                                <div className="blog-btn">
                                    <a href="#">Read More<i className="fas fa-chevron-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12">
                        <div className="single-post single-post-box active mb-30" >
                            <div className="blog-thumb">
                                <a href="blog-details.html">
                                    <img src={blogImage2} alt="img" />
                                </a>
                                <div className="ct-link">
                                    <a href="#">FITNESS</a>
                                </div>
                            </div>
                            <div className="blog-content">  
                                <div className="b-meta mb-20">
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6">
                                        <i className="far fa-calendar-alt"></i>  7 March, 2019
                                        </div>
                                    <div className="col-lg-6 col-md-6">
                                        <i className="fas fa-user"></i> By Jhone Doe
                                        </div>
                                    </div>
                                </div> 
                                <h4><a href="blog-details.html">Monthly eraesent justo mauris, vitae nisi ultricies.</a></h4>                     
                                <p>Integer auctor est nec semper hendrerit. Etiam sollicitudin enim in urna commodo, in dapibus velit elementum.</p>    
                                <div className="blog-btn"><a href="#">Read More<i className="fas fa-chevron-right"></i></a></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12">
                        <div className="single-post single-post-box mb-30" >                               
                            <div className="blog-thumb">
                                <a href="blog-details.html">
                                    <img src={blogImage3} alt="img" /> 
                                </a>
                                <div className="ct-link">
                                    <a href="#">FITNESS</a>
                                </div>
                            </div>
                            <div className="blog-content">  
                                <div className="b-meta mb-20">
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6">
                                            <i className="far fa-calendar-alt"></i>  7 March, 2019
                                        </div>
                                        <div className="col-lg-6 col-md-6">
                                            <i className="fas fa-user"></i> By Jhone Doe
                                        </div>
                                    </div>
                                </div>
                                <h4><a href="blog-details.html">User Experience Psychology And Performance Smashing</a></h4>                          
                                <p>Integer auctor est nec semper hendrerit. Etiam sollicitudin enim in urna commodo, in dapibus velit elementum.</p>    
                                <div className="blog-btn"><a href="#">Read More<i className="fas fa-chevron-right"></i></a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}