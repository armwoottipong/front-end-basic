import React from 'react'
import Img from '../../assets/img/UnlockImg/Img1.svg'
import './Unlock.css'

function Unlock() {
    return (
        <div className="unlock-section">
            <div className='container'>
                <div className="unlock-wrapper">
                    <img src={Img} alt="" />
                    <div className='unlock-content'>
                        <h2>The unseen of spending three <br /> years at Pixelgrade</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</p>
                        <div className='unlock-btn'>
                            <a href="#">Learn More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Unlock