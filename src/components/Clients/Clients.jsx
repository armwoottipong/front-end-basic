import React from 'react'
import './Clients.css'
import clientsLogo from '../../assets/img/Clients_Logos/Logo.svg'
import clientsLogo1 from '../../assets/img/Clients_Logos/Logo-1.svg'
import clientsLogo2 from '../../assets/img/Clients_Logos/Logo-2.svg'
import clientsLogo3 from '../../assets/img/Clients_Logos/Logo-3.svg'
import clientsLogo4 from '../../assets/img/Clients_Logos/Logo-4.svg'
import clientsLogo5 from '../../assets/img/Clients_Logos/Logo-5.svg'
import clientsLogo6 from '../../assets/img/Clients_Logos/Logo-6.svg'

const ClientsLogos = [
    clientsLogo,
    clientsLogo1,
    clientsLogo2,
    clientsLogo3,
    clientsLogo4,
    clientsLogo5,
    clientsLogo6,
]

function Clients() {
    return (
        <div className="client-section text-center">
            <div className='container'>
                <h1>Our Clients</h1>
                <p>We have been working with some Fortune 500+ clients</p>
                <ul>
                    {ClientsLogos.map((client, index) => (
                        <li key={index}>
                            <img src={client} alt="" />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Clients