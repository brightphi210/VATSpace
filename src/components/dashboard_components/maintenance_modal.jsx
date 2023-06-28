

import company1 from "./images/maintenace_logo.png"
import company2 from "./images/maintenace_logo2.png"


const MaintenanceModal = ({closeModal}) =>{

    const closeButton = () =>{
        closeModal(false)
    }


    return (
        <div className="maintainance_modal_div">
            <section className="maintainance_modal">
                <div className="choose_close">
                    <h3>Choose a preferred company</h3> 
                    <i class="uil uil-times" onClick={closeButton}></i>
                </div> 


                <div className="comp_div">
                    <div>
                        <img src={company1} alt="" />
                        <p>$4.00 per hour 
                            <i class="uil uil-star rate"></i>
                            <i class="uil uil-star rate"></i>
                            <i class="uil uil-star rate"></i>
                            <i class="uil uil-star rate"></i>
                            <i class="uil uil-star rate"></i>
                        </p>

                    </div>

                    <div className="comp_div_button">
                        <button>Book Now</button>
                        <button>Rate Now</button>
                    </div>
                </div>




                <div className="comp_div">
                    <div>
                        <img src={company2} alt="" />
                        <p>$4.00 per hour 
                            <i class="uil uil-star rate"></i>
                            <i class="uil uil-star rate"></i>
                            <i class="uil uil-star rate"></i>
                            <i class="uil uil-star rate"></i>
                            <i class="uil uil-star rate"></i>
                        </p>

                    </div>

                    <div className="comp_div_button">
                        <button>Book Now</button>
                        <button>Rate Now</button>
                    </div>
                </div>




                <div className="comp_div">
                    <div>
                        <img src={company1} alt="" />
                        <p>$4.00 per hour 
                            <i class="uil uil-star rate"></i>
                            <i class="uil uil-star rate"></i>
                            <i class="uil uil-star rate"></i>
                            <i class="uil uil-star rate"></i>
                            <i class="uil uil-star rate"></i>
                        </p>

                    </div>

                    <div className="comp_div_button">
                        <button>Book Now</button>
                        <button>Rate Now</button>
                    </div>
                </div>


                <div className="comp_div">
                    <div>
                        <img src={company2} alt="" />
                        <p>$4.00 per hour 
                            <i class="uil uil-star rate"></i>
                            <i class="uil uil-star rate"></i>
                            <i class="uil uil-star rate"></i>
                            <i class="uil uil-star rate"></i>
                            <i class="uil uil-star rate"></i>
                        </p>

                    </div>

                    <div className="comp_div_button">
                        <button>Book Now</button>
                        <button>Rate Now</button>
                    </div>
                </div>

                <button className="seemore">See More</button>
            </section>
        </div>
    )
}

export default MaintenanceModal