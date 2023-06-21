

import affiliate from "./images/newAffliate.png"

const Affiliate = () =>{
    return(
        <div className="new_affiliate">
            <div className="new_affiliate_div">
                <h2>Become an Affiliate Agent?</h2>
                <p>We'll help you to grow your career and growth.</p>
                <button>Register Now <i class="uil uil-angle-double-right dright"></i></button>
            </div>

            <img src={affiliate} alt="" /> 
        </div>
    )
}

export default Affiliate