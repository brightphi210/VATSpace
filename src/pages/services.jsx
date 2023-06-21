
import "./CSS/services.css"


import ServiceBodyOne from "../components/services_component/ServiceBodyOne"
import ServiceMain from "../components/services_component/servicesMain"

import Header from "../components/home_components/header"
import Footer from "../components/home_components/footer"

// ======================= images =====================


const Services = () =>{
    return(
        <div>
            <Header />
            <ServiceBodyOne />
            <ServiceMain />
            <Footer />
        </div>
    )
}


export default Services