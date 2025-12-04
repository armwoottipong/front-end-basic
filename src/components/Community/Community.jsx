import React from 'react'
import Icon from '../../assets/img/Community/Icon.svg'
import Icon1 from '../../assets/img/Community/Icon-1.svg'
import Icon2 from '../../assets/img/Community/Icon-2.svg'
import './Community.css'
function Community() {
    return (
        <div className="community-section">
            <div className='container text-center'>
                <h2>Manage your entire community <br />in a single system</h2>
                <p>Who is Nextcent suitable for?</p>
                <div className='community-wrapper'>
                    <div className='community-card'>
                        <img src={Icon} alt="" />
                        <div className='community-card-content'>
                            <h3>Membership <br /> Organisations</h3>
                            <p>Our membership management software provides full automation of membership renewals and payments</p>
                        </div>
                    </div>
                    <div className='community-card'>
                        <img src={Icon1} alt="" />
                        <div className='community-card-content'>
                            <h3>National <br /> Associations</h3>
                            <p>Our membership management software provides full automation of membership renewals and payments</p>
                        </div>
                    </div>
                    <div className='community-card'>
                        <img src={Icon2} alt="" />
                        <div className='community-card-content'>
                            <h3>Clubs And <br /> Groups</h3>
                            <p>Our membership management software provides full automation of membership renewals and payments</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Community