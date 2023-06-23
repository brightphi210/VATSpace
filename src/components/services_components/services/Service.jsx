import React from 'react'

const Service = ({ icon, service, description }) => {
    return (
        <div className='service'>
            <div>
                <i>{icon}</i>
            </div>
            <h2>{service}</h2>
            <p>{description}</p>
        </div>
    )
}

export default Service