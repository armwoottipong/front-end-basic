import React from 'react'
import Icon from '../../assets/img/Achievements/Icon.svg'
import Icon1 from '../../assets/img/Achievements/Icon-1.png'
import Icon2 from '../../assets/img/Achievements/Icon-2.svg'
import Icon3 from '../../assets/img/Achievements/Icon-3.svg'
import './Achievements.css'
function Achievements() {
    return (
        <div class="achievements-section">
            <div class="container">
                <div class="achievements-grid-container">
                    <div class="text-content">
                        <h2>Helping a local <br /> <span>business reinvent itself</span></h2>
                        <p>We reached here with our hard work and dedication</p>
                    </div>
                    <div class="stats-section">
                        <div class="stats-grid">
                            <div class="achievements-item">
                                <img src={Icon} alt="" />
                                <div>
                                    <h3>2,245,341</h3>
                                    <p>Members</p>
                                </div>
                            </div>
                            <div class="achievements-item">
                                <img src={Icon1} alt="" />
                                <div>
                                    <h3>46,328</h3>
                                    <p>Clubs</p>
                                </div>
                            </div>
                            <div class="achievements-item">
                                <img src={Icon2} alt="" />
                                <div>
                                    <h3>828,867</h3>
                                    <p>Event Bookings</p>
                                </div>
                            </div>
                            <div class="achievements-item">
                                <img src={Icon3} alt="" />
                                <div>
                                    <h3>1,926,436</h3>
                                    <p>Payments</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Achievements