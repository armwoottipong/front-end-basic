import React from 'react'
import Header1 from '../../assets/img/Hero_section/Header1.svg'
import './Herosection.css'

function Header() {
    return (
        <div className="hero bg-[#F5F7FA]">
            <div className="container">
                <div className="hero-wrapper">
                    <div className='hero-text'>
                        <div className='hero-title'>
                            <h1>
                                Lessons and insights  <br />
                                <span>from 8 years</span>
                            </h1>
                            <p>
                                Where to grow your business as a photographer: site or social media?
                            </p>
                        </div>
                        <div>
                            <a className='hero-btn' href="#">Register</a>
                        </div>
                    </div>
                    <img src={Header1} alt="" className='hero-img' />
                </div>
                <div className="hero-dots">
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                </div>
            </div>
        </div>
    )
}

export default Header
