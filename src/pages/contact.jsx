import "./CSS/contact.css"

import Footer from "../components/home_components/footer"
import Header from "../components/home_components/header"
import ContactBody from "../components/contact_components/ContactBody"
import Banner from "../components/contact_components/Banner"

const Contact = () => {
    return (
        <div>
            <Header />
            <Banner />
            <ContactBody />
            <Footer />
        </div>
    )
}


export default Contact