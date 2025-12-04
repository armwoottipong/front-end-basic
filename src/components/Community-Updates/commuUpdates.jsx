import React from 'react'

import Img18 from '../../assets/img/Community-Updates/image-18.jpg'
import Img19 from '../../assets/img/Community-Updates/image-19.jpg'
import Img20 from '../../assets/img/Community-Updates/image-20.jpg'

import { HiOutlineArrowNarrowRight } from "react-icons/hi";

import './commuUpdates.css'

function commuUpdates() {
  return (
    <div className='commu-section'>
      <div className="container">
        <div className="commu-content">
          <div className="commu-Header">
            <h2>Caring is the new marketing</h2>
            <p>The Nextcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lot's more.​</p>
          </div>
          <div className="commu-wrapper">
            <div className="commu-card">
              <div className="card-content">
                <img src={Img18} alt="" />
                <div className="text-box">
                  <h4>Creating Streamlined Safeguarding Processes with OneRen</h4>
                  <a href="">Readmore <HiOutlineArrowNarrowRight /></a>
                </div>
              </div>
            </div>
            <div className="commu-card">
              <div className="card-content">
                <img src={Img19} alt="" />
                <div className="text-box">
                  <h4>What are your safeguarding responsibilities and how can you manage them?</h4>
                  <a href="">Readmore <HiOutlineArrowNarrowRight /></a>
                </div>
              </div>
            </div>
            <div className="commu-card">
              <div className="card-content">
                <img src={Img20} alt="" />
                <div className="text-box">
                  <h4>Revamping the Membership <br /> Model with Triathlon <br /> Australia</h4>
                  <a href="">Readmore <HiOutlineArrowNarrowRight /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default commuUpdates