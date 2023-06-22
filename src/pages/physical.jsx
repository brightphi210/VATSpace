
import "./CSS/physical.css"


import PhysicalProductBodyOne from "../components/product_components/ProductBodyOne"
import PhysicalProductMain from "../components/product_components/ProductMain"

import Header from "../components/home_components/header"
import Footer from "../components/home_components/footer"

// ======================= images =====================


const Physical = () =>{
    return(
        <div>
            <Header />
            <PhysicalProductBodyOne />
            <PhysicalProductMain />
            <Footer />
        </div>
    )
}


export default Physical