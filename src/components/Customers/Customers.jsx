import React from 'react'
import img9 from '../../assets/img/Customers/image-9.png'
import Logo from '../../assets/img/Customers/Logo.svg'
import Logo1 from '../../assets/img/Customers/Logo-1.svg'
import Logo2 from '../../assets/img/Customers/Logo-2.svg'
import Logo3 from '../../assets/img/Customers/Logo-3.svg'
import Logo4 from '../../assets/img/Customers/Logo-4.svg'
import Logo5 from '../../assets/img/Customers/Logo-5.svg'
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

import './Customers.css'

const LogoList = [
    Logo,
    Logo1,
    Logo2,
    Logo3,
    Logo4,
    Logo5,
]

function Customers() {
    return (
        <div className="Customers-section">
            <div className='container'>
                <div className='Customers-wrapper'>
                    <img src={img9} alt="" />
                    <div className='Customers-content'>
                        <p>Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.</p>
                        <h4>Tim Smith</h4>
                        <span>British Dragon Boat Racing Association</span>
                        <ul>
                            {LogoList.map((client, index) => (
                                <li key={index}>
                                    <img src={client} alt="" />
                                </li>
                            ))}
                            <li className='meet-btn'><a href="#">Meet all customers <HiOutlineArrowNarrowRight /></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Customers