import React from 'react'
import HeadOffice from './contact_single_components/HeadOffice'
import OpeningHours from './contact_single_components/OpeningHours'
import ContactForm from './contact_single_components/ContactForm'

const ContactBody = () => {
    return (
        <div className='container'>
            <div className='contact'>
                <div>
                    <HeadOffice />
                    <OpeningHours />
                </div>
                <ContactForm />
            </div>
        </div>
    )
}

export default ContactBody