

import backgroundImage from "./images/back.png"
import firstImage from "./images/firstImage.png"

const BodyOne = () =>{
    return(
        <div>
            {/* ====================== BODY PART ======================= */}
            <section id="body">
                <div className ="body_text">
                    <img src={backgroundImage} alt="" class="back" />
                    <h2>Connect <br /> with <span class="ease">ease</span> </h2>
                    <h4>Get connected to a Dream house at your comfort Zone, </h4>
                    <p>
                        VATSpace connect house owners and tenants together from the
                        <br />
                        comfort of there zone.
                    </p>
                    <button>Get a Property <i class="uil uil-message" style={{paddingLeft: 20,  fontSize:20}}></i></button>
                    <span class="NFT">Get NFT Property</span>
                </div>
                <img src={firstImage} alt=""  class="hand" />
            </section>


            
            {/* ========================= SOLD HOUSES ================================ */}

            <section class="sold">
                <div class="sold1">
                    {/* <i class="uil uil-tag-alt icons"></i> */}
                    <p><span>350,000</span>+ Houses Sold</p>
                </div>
                <div class="sold1">
                    {/* <i class="uil uil-estate icons"></i> */}
                    <p> <span>2,000</span>+ Real Estate Firms</p>
                </div>

                <div class="sold1">
                    {/* <i class="uil uil-home icons"></i> */}
                    <p><span>8,000</span>+ House Owners</p>
                </div>

                <div class="sold1">
                    {/* <i class="uil uil-user-md icons"></i> */}
                    <p> <span>350,000</span> + Users</p>
                </div>

            </section>
        </div>
    )
}

export default BodyOne