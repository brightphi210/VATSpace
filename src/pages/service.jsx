import "./CSS/service.css"

import Header from "../components/home_components/header"
import Banner from "../components/services_components/Banner"
import Footer from "../components/home_components/footer"
import BannerHeading from "../components/services_components/BannerHeading"
import ServiceBody from "../components/services_components/ServiceBody"


const Service = () => {
    return (
        <div>
            <Header />
            <Banner />
            <BannerHeading />
            <ServiceBody />
            <Footer />
        </div>
    )
}

export default Service 