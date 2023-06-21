

import "./CSS/single_services.css"

import SingleServiceFirstSection from "../components/single_components/singleServiceFirstSection"
import Footer from "../components/home_components/footer"
import Header from "../components/home_components/header"
const SingleService = () =>{
    return(
        <div>
            <Header />
            <SingleServiceFirstSection />
            <Footer />
        </div>
    )
}

export default SingleService