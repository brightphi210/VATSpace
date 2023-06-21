
import singlImage1 from "./images/single-property1.png"
import singlImage2 from "./images/single-property2.png"
import singlImage3 from "./images/single-property3.png"


import carol1 from "./images/caro1.png"
import carol2 from "./images/caro2.png"
import carol3 from "./images/caro3.png"



import ModalPop from "./modalPopup"
import Amenities from "./amenities"



import { useState } from "react"
const SingleServiceFirstSection = () =>{
    

    const [openModal, setOpenModal] = useState(false)

    const dialogPop = () =>{
        setOpenModal(true)
    }


    return(
        <div>
            <section className="services_products_grid">
                <div id="ad1">
                    <img src={singlImage1} alt="" />
                </div>

                <div id="ad2">
                    <img src={singlImage2} alt="" />
                </div>

                <div id="ad3">
                    <img src={singlImage3} alt="" />
                </div>
            </section>

            <section className="description_flex">
                <div className="description_property">
                    <h3>4-room apartment with terrace</h3>
                    <span>Rumuola Juction, Portharcourt. </span>
                    <span>N320, 000</span>
                    <ul className="desc_ul">
                        <li><i class="uil uil-adjust-half"></i> 1 bed(s)</li>
                        <li><i class="uil uil-adjust-half"></i> Entire space </li>
                        <li><i class="uil uil-adjust-half"></i> 24hrs power </li>
                        <li><i class="uil uil-adjust-half"></i> Furnished</li>
                    </ul>
                    <hr />

                    <div className="apart_flex">
                        <p>APARTMENT AVAILABLE UNTIL</p>
                        <p>30 November 2024</p>
                    </div>

                    <hr />

                    <p className="p_desc">
                        Multiple units of well-furnished 1-bedroom apartments, 
                        fitted to the highest specifications for 
                        those who like it minimalistic and simple. 
                        Comes with a neighbourhood supermarket, power 
                        supply and weekly cleaning services amongst 
                        other standard amenities. Located in a serene 
                        gated community, with quick access to Lagos 
                        Central. Service Charge 250 Units of Electricity 
                        Units Monthly, 12Kg Gas supply , Security, Water, 
                        Servicing of AC's when due and Cleaning once a 
                        week. Upon Exhaustion of Electricity Units provided for 
                        monthly in the service charge, the liability falls on the 
                        tenant to purchase additional units at N100 Per Kw.
                    </p>

                    <hr />

                    <Amenities />

                    <hr />
                </div>


                {/* ======================== Right Description ================ */}

                <div className="description_summary">
                    <p>Rent price</p>
                    <h3>NGN 287,500/Month</h3>

                    <h4 >DURATION</h4>
                    <select className="minimalOne">
                        <option>Monthly</option>
                        <option>Anually</option>
                    </select>


                    <div className="debit_details_flex">
                        <div className="debit_details">
                            <p>RLS</p>
                            <p>NGN 237,500 monthly</p>
                        </div>

                        <div className="debit_details">
                            <p>BILL </p>
                            <p>NGN 15,500</p>
                        </div>

                        <div className="debit_details">
                            <p className="last_p">Total</p>
                            <p className="last_p">NGN 395,000</p>
                        </div>
                    </div>

                    <div className="book_buttons">
                        <button onClick={dialogPop}>Book Space</button>
                        <button>Book Tour</button>
                    </div>
                   {openModal && <ModalPop closeModal={setOpenModal} />}
                </div>
            </section>

            
            <section className="single_property_general">
                <h5 className="nearby_space">NEARBY SPACES</h5>
                <div className="single_property_carosel">
                    <div className="image_section">
                        <img src={carol1} alt="" />
                        <div className="single_prop_desc">
                            <h3>Bungalow</h3>
                            <p>Peter Odili Road</p>
                            <button className="btn1">For Sale</button>
                            <ul className="desc_prop">
                                <li><i class="uil uil-bed"></i> 3 Br </li>
                                <li><i class="uil uil-bath"></i> 3 Ba</li>
                                <li><i class="uil uil-mountains"></i> 2300 Sq.Ft</li>
                                <li><i class="uil uil-luggage-cart"></i> 1 Gr</li>
                            </ul>
                        </div>
                    </div>

                    <div className="image_section">
                        <img src={carol2} alt="" />
                        <div className="single_prop_desc">
                            <h3>Duplex</h3>
                            <p>Peter Odili Road</p>
                            <button>For Rent</button>
                            <ul className="desc_prop">
                                <li><i class="uil uil-bed"></i> 3 Br </li>
                                <li><i class="uil uil-bath"></i> 3 Ba</li>
                                <li><i class="uil uil-mountains"></i> 2300 Sq.Ft</li>
                                <li><i class="uil uil-luggage-cart"></i> 1 Gr</li>
                            </ul>
                        </div>
                    </div>

                    <div className="image_section">
                        <img src={carol3} alt="" />
                        <div className="single_prop_desc">
                            <h3>Studio Apartment</h3>
                            <p>Peter Odili Road</p>
                            <button className="btn1">For Sale</button>
                            <ul className="desc_prop">
                                <li><i class="uil uil-bed"></i> 3 Br </li>
                                <li><i class="uil uil-bath"></i> 3 Ba</li>
                                <li><i class="uil uil-mountains"></i> 2300 Sq.Ft</li>
                                <li><i class="uil uil-luggage-cart"></i> 1 Gr</li>
                            </ul>
                        </div>
                    </div>

                    <div className="image_section">
                        <img src={carol1} alt="" />
                        <div className="single_prop_desc">
                            <h3>3 Bed room flat</h3>
                            <p>Peter Odili Road</p>
                            <button>For Rent</button>
                            <ul className="desc_prop">
                                <li><i class="uil uil-bed"></i> 3 Br </li>
                                <li><i class="uil uil-bath"></i> 3 Ba</li>
                                <li><i class="uil uil-mountains"></i> 2300 Sq.Ft</li>
                                <li><i class="uil uil-luggage-cart"></i> 1 Gr</li>
                            </ul>
                        </div>
                    </div>

                    <div className="image_section">
                        <img src={carol2} alt="" />
                        <div className="single_prop_desc">
                            <h3>Self contain </h3>
                            <p>Peter Odili Road</p>
                            <button className="btn1">For Sale</button>
                            <ul className="desc_prop">
                                <li><i class="uil uil-bed"></i> 3 Br </li>
                                <li><i class="uil uil-bath"></i> 3 Ba</li>
                                <li><i class="uil uil-mountains"></i> 2300 Sq.Ft</li>
                                <li><i class="uil uil-luggage-cart"></i> 1 Gr</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default SingleServiceFirstSection