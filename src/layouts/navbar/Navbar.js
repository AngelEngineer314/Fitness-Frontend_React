import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory, useLocation } from "react-router-dom";
import NavbarUser from './NavbarUser'

import logo from "../../assets/images/logo/logo.png"

export default function Navbar(props) {
  const location = useLocation();
  
  return (
    <header className="header-area">
      {location.pathname.includes('sign') ?
        <div id="header-sticky" className="menu-area menu-area2">
          <div className="container">
            <div className="second-menu">
              <div className="row align-items-center">
                <div className="col-xl-5 col-lg-5"></div>
                <div className="col-xl-2 col-lg-2">
                  <div className="logo2">
                    <a href="index.html">
                      <img src={logo} alt="logo" />
                    </a>
                  </div>
                </div>
                <div className="col-xl-5 col-lg-5"></div>
              </div>
            </div>
          </div>
        </div> : 
        <div id="header-sticky" className="menu-area menu-area2">
          <div className="container">
            <div className="second-menu">
              <div className="row align-items-center">
                <div className="col-xl-2 col-lg-2">
                  <div className="logo2">
                    <a href="index.html">
                      <img src={logo} alt="logo" />
                    </a>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6">
                  <div className="main-menu text-right pr-15">
                    <nav id="mobile-menu">
                      <ul>
                        <li className="has-sub">
                          <a href="/">Home</a>
                        </li>
                        <li>
                          <a href="/about">About Us</a>
                        </li>
                        <li className="has-sub">
                          <a href="/services">Services</a>
                        </li>
                        <li className="has-sub">
                          <a href="/pricing">Pricing</a>
                        </li>
                        <li className="has-sub">
                          <a href="/contact">Contact Us</a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 d-none d-lg-block">
                  <div className="right-menu">
                    <ul>
                      <li className="has-sub">
                      {location.pathname.includes('sign') ?
                        <a href="/signIn">Sign In</a> : null
                      }
                      </li>
                      <li>
                        <a href="contact.html" className="top-btn">
                          Book Now
                        </a>
                      </li>
                      {!location.pathname.includes('sign') ?
                        <li className="navbar-user">
                          <NavbarUser />
                        </li> : null
                      }
                    </ul>
                  </div>
                </div>
                <div className="col-12">
                  <div className="mobile-menu"></div>
                </div>
              </div>
            </div>
          </div>
       </div>
      }
    </header>
  )
}
