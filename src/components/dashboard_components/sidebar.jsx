
import logo1 from "./images/VAT2.png"
import profile from "./images/Profile-1.png"

import { Link } from "react-router-dom"

const SideBar = () =>{
    return(
        <div>
            <div className="sidebar_left">
                <div className="logo_flex">
                    <img src={logo1} alt="" />
                    <i class="uil uil-angle-left close"></i>
                </div>
                <p>For Real Estate</p>

                
                <span>Menu</span>
                <button><i class="uil uil-create-dashboard list_icons"></i> Dashboard</button>

                <hr className="hr" />
                <span>Manage Listings</span>
                <ul className="manage_listing">
                    <Link to={"/dashboard"} ><li><i class="uil uil-create-dashboard"></i> Home</li></Link>
                    <Link to={"/dashboard/properties"}><li><i class="uil uil-estate list_icons"></i> Properties</li></Link>
                    <Link to={"/dashboard/favourites"}><li><i class="uil uil-favorite list_icons"></i> Favorite</li></Link>
                    <li><i class="uil uil-invoice list_icons"></i> Invoice</li>
                    <li><i class="uil uil-history list_icons"></i> Payment History</li>
                </ul>


                <hr className="hr" />
                <span>Manage Accounts</span>
                <ul className="manage_listing">
                    <li><i class="uil uil-package list_icons"></i> My Package</li>
                    <li><i class="uil uil-user-circle list_icons"></i> My Profile</li>
                    <li><i class="uil uil-sign-out-alt list_icons"></i> Log Out</li>
                </ul>

                <hr className="hr" />
                <span>Proflie</span>
                <div className="profile_flex">
                    <img src={profile} alt="" />
                    <p>bright210@gmail.com</p>
                </div>
            </div> 
        </div>
    )
}

export default SideBar