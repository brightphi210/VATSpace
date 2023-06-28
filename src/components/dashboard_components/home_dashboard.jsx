

import SideBar from "./sidebar"

import InsideHomeDashboard from "./inside_home_dashboard"
import DashNavBar from "./dash_navBar"

const HomeDashboard = () => {

    return(
        <div>
            <DashNavBar />
            <section className="dashboard_flex">
                
                <SideBar />
                {/* ================== sidebar_right ================== */}
                <div className="sidebar_right">
                    <div className="greeting_flex">
                        <div>
                            <h4>Good Morning, Bright</h4>
                            <p>welcome to you UX-Conn Dashboard</p>
                        </div>

                        <div className="search_div">
                            <input type="text" placeholder="search . . . ." />
                            <i class="uil uil-search search" ></i>
                        </div>
                    </div>
                    <InsideHomeDashboard />
                </div>    
            </section>
        </div>
    )
}

export default HomeDashboard