import React from 'react'

const Service = ({ icon }) => {
    return (
        <div className='service'>
            <div>
                <i>{icon}</i>
            </div>
            <h2>{ }</h2>
            <p>{ }</p>
        </div>
    )
}

export default Service