

import bookedImage from "./images/caro3.png"
import MaintenanceModal from "./maintenance_modal"
import { Link } from "react-router-dom"
// import SideBar from "./sidebar"
import profile from "./images/Profile-1.png"

import { useState } from "react"


const InsideHomeDashboard = () =>{

    const [openModal, setOpenModal] = useState(false)
    
    const dialogPop = () =>{
        setOpenModal(true)
    }


    return (
        <div className="dash_middle_part">
            {/* =================== middle dashboard part =============== */}
            {/* <div > */}
                <div >
                    <div className="dash_cards_div">
                        <div className="dash_cards one">
                            <i class="uil uil-shopping-cart-alt"></i>
                            <h4>BOOKED PROPERTIES</h4>
                            <h2>5</h2>
                        </div>


                        <div className="dash_cards two">
                            <i class="uil uil-favorite"></i>
                            <h4>TOTAL FAVOURITES</h4>
                            <h2>10</h2>
                        </div>


                        <div className="dash_cards three">
                            <i class="uil uil-package"></i>
                            <h4>PACKAGE</h4>
                            <h2>FREE</h2>
                        </div>

                        <div className="dash_cards four">
                            <i class="uil uil-receipt-alt"></i>
                            <h4>TOTAL INVOICES</h4>
                            <h2>3</h2>
                        </div>
                    </div>

                
                {/* ======================= maintenance ==================== */}
                    <div className="maintenance">
                        <h3>Maintenance Request</h3>
                        <p>Make a Maintenance request for you house with instant reply</p>
                        <button onClick={dialogPop}>Proceed Request Now</button>
                    </div>
                </div>

                {openModal && <MaintenanceModal closeModal={setOpenModal} />}



            {/* ========================= dash_middle_part ======================== */}
                <div className="dash_middle_right">
                    <div className="booked_div">
                        <div className="booked_button">
                            <p>Latest Booked</p>
                            <button>ALL BOOKED</button>
                        </div>
                        <div className="image_div">
                            <img src={bookedImage} alt="" />
                            <div className="image_div_desc">
                                <h4>
                                    Large 4-room apartment with a beautiful terrace
                                </h4>
                                <img src={profile} alt="" />
                            </div>

                            <div className="desc_span">
                                <span>320 000€</span>
                                <span>Barcelona IV.</span>
                            </div>
                        </div>
                        <div className="buy_now">
                                <button>Buy Now</button>
                                <Link to={"/"}><button className="add">Add More</button></Link>
                        </div>
                    </div>

                    {/* ====================== appointment ============ */}
                    <div className="appoint_div">
                        <div className="appoint_flex">
                            <h4>Appointment <i class="uil uil-clock-two"></i> 09:00</h4>
                            {/* <i class="uil uil-pause pause"></i> */}
                        </div>

                        <div className="appoint_image_div">
                            <div className="appoint_image">
                                <img src={bookedImage} alt="" />
                                <div className="appoint_profile">
                                    <div>
                                        <h4>Large 4-room apartment</h4>
                                        <p>09:00</p>
                                    </div>
                                    <img src={profile} alt="" />
                                </div>
                            </div>
                            <div className="appoint_desc">
                                <i class="uil uil-bell bell"></i>
                            </div>
                        </div>
                    </div>
                </div>
            {/* </div> */}
        </div>
    )
}

export default InsideHomeDashboard