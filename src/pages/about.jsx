import "./CSS/about.css";

import Header from "../components/home_components/header";
import Footer from "../components/home_components/footer";
import Banner from "../components/about_components/Banner";
import BannerHeading from "../components/about_components/BannerHeading";
import AboutBody from "../components/about_components/AboutBody";
import Team from "../components/home_components/team";

const About = () => {
    return (
        <div>
            <Header />
            <Banner />
            <BannerHeading />
            <AboutBody />
            <Team />
            <Footer />
        </div>
    )
}

export default About