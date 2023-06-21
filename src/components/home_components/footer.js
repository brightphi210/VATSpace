

import logo from "./images/VAT2.png"
import btn1 from "./images/btn1.png"
import btn2 from "./images/btn1.png"

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer_one">
                <img src={logo} alt="" />
                <div className="follow">
                    <h3>Follow Us </h3>
                    <i class="uil uil-facebook-f"></i>
                    <i class="uil uil-twitter"></i>
                    <i class="uil uil-instagram"></i>
                </div>
            </div>

            <hr />

            {/* ==================== footer =============== */}

            <div className="footer_text">
                <div className="footer_div">
                    <h3>Popular Search</h3>
                    <ul>
                        <li>Apartment for sale</li>
                        <li>Apartment for Rent</li>
                        <li>Offices for Sale</li>
                        <li>Offices for Rent</li>
                    </ul>
                </div>

                <div className="footer_div">
                    <h3>Make Money on UX-Conn</h3>
                    <ul>
                        <li>Become a VATSpace Affiliate </li>
                    </ul>
                </div>
                
                <div className="footer_div">
                    <h3>Quick Links</h3>
                    <ul>
                        <li>Terms of Use</li>
                        <li>Private Policy</li>
                        <li>Our Services</li>
                        <li>Contact</li>
                        <li>FAQS</li>
                    </ul>
                </div>

                <div >
                    <div className="footer_div_flex">
                        <div>
                            <p>Customer Care</p>
                            <h3>+(088) 123 456 789</h3>
                        </div>

                        <div>
                            <p>Live Support?</p>
                            <h3>vatspace@gmail.com</h3>
                        </div>
                    </div>

                    <div className="input_side">
                        <input type="text" placeholder="Your Email . . ." />
                        <div className="apple_btn">
                            <img src={btn1} alt="" />
                            <img src={btn2} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer