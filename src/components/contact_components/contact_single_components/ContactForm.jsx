import React from 'react'

const ContactForm = () => {
    return (
        <form action="">
            <h2>Send Us a Message</h2>

            <label for="name">Your Name</label>
            <input type="text" name="name" />

            <label for="name">Your Email</label>
            <input type="email" name="email" />

            <label for="message">Your Message</label>
            <textarea name="message" id="" cols="30" rows="10"></textarea>

            <button type="submit">Submit</button>
        </form>
    )
}
export default ContactForm