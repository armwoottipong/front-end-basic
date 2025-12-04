import React from 'react'
import { IoPaperPlaneOutline } from "react-icons/io5";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import SocialIcons from '../../assets/img/Footer/Social-Icons.svg'
import SocialIcons1 from '../../assets/img/Footer/Social-Icons-1.svg'
import SocialIcons2 from '../../assets/img/Footer/Social-Icons-2.svg'
import SocialIcons3 from '../../assets/img/Footer/Social-Icons-3.svg'
import logo from '../../assets/img/Logo-white.svg'

import './Footer.css'
function footer() {
  return (
    <div className="footer-section">
      <div className="demo-page">
        <div className="container">
          <h1>Pellentesque suscipit <br /> fringilla libero eu.</h1>
          <div className='inline-block'>
            <a href="#">Get a Demo <HiOutlineArrowNarrowRight /></a>
          </div>
        </div>
      </div>
      <div className="footer-page">
        <div className='container'>
          <div className="main-content">
            <div className="logo-content">
              <img src={logo} alt="" className='logo' />
              <p>Copyright © 2020 Nexcent ltd. <br />All rights reserved</p>
              <ul>
                <li>
                  <a href="#"><img src={SocialIcons} alt="" /></a>
                  <a href="#"><img src={SocialIcons1} alt="" /></a>
                  <a href="#"><img src={SocialIcons2} alt="" /></a>
                  <a href="#"><img src={SocialIcons3} alt="" /></a>
                </li>
              </ul>
            </div>
            <div className="links">
              <ul>
                <h3>Company</h3>
                <li><a href="#">About us</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Contact us</a></li>
                <li><a href="#">Pricing</a></li>
                <li><a href="#">Testimonials</a></li>
              </ul>
              <ul>
                <h3>Support</h3>
                <li><a href="#">Help center</a></li>
                <li><a href="#">Terms of service</a></li>
                <li><a href="#">Legal</a></li>
                <li><a href="#">Privacy policy</a></li>
                <li><a href="#">Status</a></li>
              </ul>
              <div className='emailform'>
                <h3>Stay up to date</h3>
                <form action="">
                  <div className="mailbox">
                    <input type="text" placeholder='Your email address' />
                    <button><IoPaperPlaneOutline /></button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default footer