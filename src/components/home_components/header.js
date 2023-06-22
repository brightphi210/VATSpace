
import logo from "./images/VAT.png"
import { Link } from "react-router-dom";

const Header = () => {
    return(
        <header>
            <div className="logo_ul">
                <Link to={"/"}><img src={logo} alt="" /></Link>
                <ul>
                    <li className="company">Company <i className="uil uil-angle-down"></i>
                        <ul className="company_ul">
                            <Link to={"/services"}><li><i className="uil uil-server-connection icon"></i>Services</li></Link>
                            <Link to={"/about"}><li><i className="uil uil-user-circle icon" ></i> About</li></Link>
                            <Link to={"/services"}><li><i className="uil uil-phone-volume icon"></i> Contact</li></Link>
                        </ul>
                    </li>

                    <li className="company">Product <i className="uil uil-angle-down"></i>
                        <ul className="company_ul">
                            <Link to={"/physical"}><li><i className="uil uil-building icon"></i> Phyical</li></Link>
                            <li><i className="uil uil-wallet icon"></i> NFT</li>
                        </ul>
                    </li>
                    <li>FAQS</li>
                    <li>Market Place</li>
                </ul>
            </div>  

            <ul className="aff_log">
                <button className="login">Login</button>
                <li className="aff">Affiliates </li>
                <li className="company">Vendor <i className="uil uil-angle-down"></i>
                    <ul className="company_ul">
                        <li><i className="uil uil-home icon"></i> Land Lords</li>
                        <li><i className="uil uil-estate icon"></i> Real Estate</li>
                    </ul>
                </li>
            </ul>
        </header>
    )
}

export default Header