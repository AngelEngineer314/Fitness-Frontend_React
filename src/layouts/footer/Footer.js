import React, { useState, useEffect } from "react"
import { useLocation } from "react-router-dom";

import whiteLogo from "../../../src/assets/images/logo/w_logo.png"

export default function Footer(props) {
  const location = useLocation();

  return (
    <>
    {!location.pathname.includes('sign') ?
      <footer className="footer-bg footer-p pt-90">
        <div className="footer-top-heiding">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-8">
                <div className="section-title">
                  <h2> Subscribe To Our Newsletter For Latest Updates</h2>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4">
                <div className="newslater-area">
                  <form name="ajax-form" id="contact-form4" action="#" method="post" className="contact-form newslater">
                    <div className="form-group">
                      <input className="form-control" id="email2" name="email" type="email" placeholder="Email Address..." required="" />
                      <button type="submit" className="btn btn-custom" id="send2">
                        Subscribe Now
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-top pb-50">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-xl-3 col-lg-3 col-sm-6">
                <div className="footer-widget mb-30">
                  <div className="flog mb-35">
                    <a href="#">
                      <img src={whiteLogo} alt="logo" />
                    </a>
                  </div>
                  <div className="f-contact">
                    <ul>
                      <li>
                        <div className="row align-items-center">
                          <div className="col-md-2">
                            <i className="icon far fa-phone"></i>
                          </div>
                          <div className="col-md-10">
                            <span>
                                <a href="tel:+15599310042">(559) 931-0042)</a>
                              </span>
                            </div>
                        </div>
                      </li>
                      <li>
                        <div className="row align-items-center">
                          <div className="col-md-2">
                            <i className="icon dripicons-mail"></i>
                          </div>
                          <div className="col-md-10">
                            <span>
                              <a href="mailto:hello@benchmarkfitlabs.com">hello@benchmarkfitlabs.com</a>
                            </span>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-lg-2 col-sm-6">
                <div className="footer-widget mb-30">
                  <div className="f-widget-title">
                    <h5>Our Links</h5>
                  </div>
                  <div className="footer-link">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fas fa-chevron-right"></i> Home
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fas fa-chevron-right"></i> About Us
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fas fa-chevron-right"></i> Services
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fas fa-chevron-right"></i> Blog
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fas fa-chevron-right"></i> Contact Us
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-lg-2 col-sm-6">
                <div className="footer-widget mb-30">
                  <div className="f-widget-title">
                    <h5>Other Links</h5>
                  </div>
                  <div className="footer-link">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fas fa-chevron-right"></i> FAQ
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fas fa-chevron-right"></i> Pricing
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fas fa-chevron-right"></i> Testimonial
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fas fa-chevron-right"></i> Terms & Conditions
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fas fa-chevron-right"></i> Privacy
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-5 col-lg-5 col-sm-6">
                <div className="footer-widget mb-30">
                  <div className="footer-text mb-20">
                    <p>Benchmark Fitness Labs is on a mission to provide clinical grade health & performance tracking to everyone. Our services are completely mobile, so we can come to your home, office, event, or facility. We offer the most accurate 3D body scan and the most precise self contained metabolic analysis device on the market. If you are looking to take your training to the next level or just looking for starting benchmarks, contact us today.</p>
                  </div>
                  <div className="footer-social">
                    <a href="#">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-youtube"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-instagram"></i>
                    </a>
                    {/* <a href="#"><i className="fab fa-google-plus-g"></i></a> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright-wrap">
          <div className="container">
            <div className="row align-items-center text-center">
              <div className="col-12">Copyright © 2020 Benchmark Fitness Labs. All rights reserved</div>
            </div>
          </div>
        </div>
      </footer> : null
    }
    </>
  )
}
