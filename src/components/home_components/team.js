
import teamOne from "./images/our-team-01.png" 
import teamTwo from "./images/our-team-02.png" 
import teamThree from "./images/our-team-06.png" 



const Team = () =>{
    return(

        <div className="team_flex">
            <h2>Our Team</h2>
            <p>We have been working with clients around the world</p>
            <div className="team_flex_data">
                <div className="single_flex">
                    <img src={teamOne} alt="" />
                    <h3>Dollie Horton</h3>
                    <p>CEO & Co-Founder</p>
                </div>

                <div className="single_flex">
                   <img src={teamTwo} alt="" /> 
                   <h3>Dollie Horton</h3>
                    <p>CEO & Co-Founder</p>
                </div>
                
                
                <div className="single_flex">
                    <img src={teamThree} alt="" />
                    <h3>Dollie Horton</h3>
                    <p>CEO & Co-Founder</p>
                </div>
                
                <div className="single_flex">
                    <img src={teamTwo} alt="" />
                    <h3>Dollie Horton</h3>
                    <p>CEO & Co-Founder</p>
                </div>
            </div>
        </div>
    )
}

export default Team