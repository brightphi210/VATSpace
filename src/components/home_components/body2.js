

import secondImage from "./images/secondImage.jpg"
import thirdImage from "./images/thirdImage.png"
import affilateImage from "./images/affilateImage.jpg"


const BodyTwo = () =>{
    return (
        <div>
            {/* ========================= MODERN LIVING FOR ALL ================================ */}

            <section id="modern_living">
                <div>
                    <h2>Modern living <br />for everyone</h2>
                    <p>
                        We provide a complete service for the sale,
                        purchase or rental of real estate. We have been
                        operating in Madrid and Barcelona more than 15 years.
                    </p>

                    <div className="input_map">
                        <select class="minimal">
                            <option>Renting</option>
                            <option>Buying</option>
                            <option>NFT</option>
                        </select>
                        

                        <div className="map">
                            <i className="uil uil-map-marker-alt"></i>
                            <input type="text" placeholder="Search for location" />
                        </div>

                        <button>Search <i className="uil uil-message" style={{paddingLeft: 10,  fontSize:15}}></i></button>
                    </div>
                </div>

                <img src={secondImage} alt="" />
            </section>



            {/* ================================ join ============================== */}
            <section className="join_flex">
                <section id="join">
                    <img src={thirdImage} alt = "" />
                    <div>
                        <h2>Are You a Real Estate Firm/House Owner? Let's Connect You to
                            the right customers</h2>
                        <p>
                            With the Traffic of over 2,000+ users,
                            UX-CONN relieves Real Estate Firms / House Owners
                            of the hassle of getting potential client by granting
                            them access to our easy system

                            Our high performing affiliates have sold over 20,000
                            digital products and they can help you reach more customers.
                        </p>

                        <button>Join as a Real Estate Firm/House Owner <i class="uil uil-message icon2"></i></button>
                    </div>
                </section>

                <section id="join">
                    <div>
                        <h2>Get Paid For Recommending High Value Houses From Real Estate
                            Firms / House Owners to Clients</h2>
                        <p>
                            With the Traffic of over 2,000+ users, UX-CONN
                            relieves Real Estate Firms / House Owners of the hassle of
                            getting potential client by granting them access to our easy
                            system

                            Our high performing affiliates have sold over 20,000 digital
                            products and they can help you reach more customers.
                        </p>

                        <button>Join as a Affiliate <i class="uil uil-message icon2"></i></button>
                    </div>
                    <img src={affilateImage} alt="" />
                </section>
            </section>
        </div>
    )
}

export default BodyTwo