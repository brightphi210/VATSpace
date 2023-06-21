
import "./CSS/home.css"




import MyCarousel from "../components/home_components/carosel"
import Header from "../components/home_components/header"
import BodyOne from "../components/home_components/body1"

import BodyTwo from "../components/home_components/body2"
import Team from "../components/home_components/team"

import Testimony from "../components/home_components/testimonia"

import Customer from "../components/home_components/customer"

import Rating from "../components/home_components/rating"
import Affiliate from "../components/home_components/affiliate"
import Footer from "../components/home_components/footer"

// howfa

const Home = () => {
    return (
        <div>
            <Header />
            <BodyOne />
            <BodyTwo />
            <MyCarousel />
            <Team />
            <Testimony />
            <Customer />
            <Rating />
            <Affiliate />
            <Footer />
        </div>
    )
}

export default Home