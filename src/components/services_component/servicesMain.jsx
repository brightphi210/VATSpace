
import pics1 from "./service_images/caro1.png"
import pics2 from "./service_images/caro2.png"
import pics3 from "./service_images/caro3.png"

import profileOne1 from "./service_images/Profile.png"
import profileTwo2 from "./service_images/Profile-1.png"
import profileThree3 from "./service_images/Profile-2.png"

import { Link } from "react-router-dom"


const ServiceMain = () =>{
    return(
        <div>
            <section className="service_section">

                <Link to={"/singleService"}>
                <div className="services_single">
                    <img src={pics1} alt="" className="img_class" />
                    <div className="inside_service_single">
                        <h3>4-room apartment with terrace</h3>
                        <div className="service_profile_flex">
                            <div>
                                <h4>N320, 000</h4>
                                <p>Rumuola Juction, Portharcourt. </p>
                            </div>
                            <img src={profileOne1} alt="" />
                        </div>
                    </div>
                </div>
                </Link>

                <div className="services_single">
                    <img src={pics2} alt="" className="img_class"/>
                    <div className="inside_service_single">
                        <h3>5i large design apartment with terrace</h3>
                        <div className="service_profile_flex">
                            <div>
                                <h4>N320, 000</h4>
                                <p>13, Abacha Road, Portharcourt. </p>
                            </div>
                            <img src={profileTwo2} alt="" />
                        </div>
                    </div>
                </div>


                <div className="services_single">
                    <img src={pics3} alt="" className="img_class"/>
                    <div className="inside_service_single">
                        <h3>Magnificent duplex in a private villa</h3>
                        <div className="service_profile_flex">
                            <div>
                                <h4>N320, 000</h4>
                                <p>17, Fruit Garden, Portharcourt. </p>
                            </div>
                            <img src={profileThree3} alt="" />
                        </div>
                    </div>
                </div>



                <div className="services_single">
                    <img src={pics1} alt="" className="img_class" />
                    <div className="inside_service_single">
                        <h3>4-room apartment with terrace</h3>
                        <div className="service_profile_flex">
                            <div>
                                <h4>N320, 000</h4>
                                <p>Rumuola Juction, Portharcourt. </p>
                            </div>
                            <img src={profileOne1} alt="" />
                        </div>
                    </div>
                </div>

                <div className="services_single">
                    <img src={pics2} alt="" className="img_class"/>
                    <div className="inside_service_single">
                        <h3>5i large design apartment with terrace</h3>
                        <div className="service_profile_flex">
                            <div>
                                <h4>N320, 000</h4>
                                <p>13, Abacha Road, Portharcourt. </p>
                            </div>
                            <img src={profileTwo2} alt="" />
                        </div>
                    </div>
                </div>


                <div className="services_single">
                    <img src={pics3} alt="" className="img_class"/>
                    <div className="inside_service_single">
                        <h3>Magnificent duplex in a private villa</h3>
                        <div className="service_profile_flex">
                            <div>
                                <h4>N320, 000</h4>
                                <p>17, Fruit Garden, Portharcourt. </p>
                            </div>
                            <img src={profileThree3} alt="" />
                        </div>
                    </div>
                </div>

                <div className="services_single">
                    <img src={pics1} alt="" className="img_class" />
                    <div className="inside_service_single">
                        <h3>4-room apartment with terrace</h3>
                        <div className="service_profile_flex">
                            <div>
                                <h4>N320, 000</h4>
                                <p>Rumuola Juction, Portharcourt. </p>
                            </div>
                            <img src={profileOne1} alt="" />
                        </div>
                    </div>
                </div>

                <div className="services_single">
                    <img src={pics2} alt="" className="img_class"/>
                    <div className="inside_service_single">
                        <h3>5i large design apartment with terrace</h3>
                        <div className="service_profile_flex">
                            <div>
                                <h4>N320, 000</h4>
                                <p>13, Abacha Road, Portharcourt. </p>
                            </div>
                            <img src={profileTwo2} alt="" />
                        </div>
                    </div>
                </div>


                <div className="services_single">
                    <img src={pics3} alt="" className="img_class"/>
                    <div className="inside_service_single">
                        <h3>Magnificent duplex in a private villa</h3>
                        <div className="service_profile_flex">
                            <div>
                                <h4>N320, 000</h4>
                                <p>17, Fruit Garden, Portharcourt. </p>
                            </div>
                            <img src={profileThree3} alt="" />
                        </div>
                    </div>
                </div>


                <div className="services_single">
                    <img src={pics1} alt="" className="img_class" />
                    <div className="inside_service_single">
                        <h3>4-room apartment with terrace</h3>
                        <div className="service_profile_flex">
                            <div>
                                <h4>N320, 000</h4>
                                <p>Rumuola Juction, Portharcourt. </p>
                            </div>
                            <img src={profileOne1} alt="" />
                        </div>
                    </div>
                </div>

                <div className="services_single">
                    <img src={pics2} alt="" className="img_class"/>
                    <div className="inside_service_single">
                        <h3>5i large design apartment with terrace</h3>
                        <div className="service_profile_flex">
                            <div>
                                <h4>N320, 000</h4>
                                <p>13, Abacha Road, Portharcourt. </p>
                            </div>
                            <img src={profileTwo2} alt="" />
                        </div>
                    </div>
                </div>


                <div className="services_single">
                    <img src={pics3} alt="" className="img_class"/>
                    <div className="inside_service_single">
                        <h3>Magnificent duplex in a private villa</h3>
                        <div className="service_profile_flex">
                            <div>
                                <h4>N320, 000</h4>
                                <p>17, Fruit Garden, Portharcourt. </p>
                            </div>
                            <img src={profileThree3} alt="" />
                        </div>
                    </div>
                </div>
            </section>
            <button className="button_section">See More</button>
        </div>
    )
}

export default ServiceMain