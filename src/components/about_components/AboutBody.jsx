import { AiFillHome } from "react-icons/ai"
import { GiHouseKeys } from 'react-icons/gi'
import { MdRealEstateAgent } from 'react-icons/md'

import { Link } from 'react-router-dom'

import Service from '../services_components/services/Service'

const AboutBody = () => {
    return (
        <div className='about_body'>
            <div className='about'>
                <h1>Our Services</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim</p>
                <div className='about_services'>
                    <Link to={'/physical'}>
                        <Service icon={<AiFillHome />} service={"Property Sales/Mgn."} description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."} />
                    </Link>
                    <Link to={"/physical"}>
                        <Service icon={<GiHouseKeys />} service={"House Sales/Rent."} description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."} />
                    </Link>
                    <Service icon={<MdRealEstateAgent />} service={"Real Estate"} description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."} />
                </div>
                <button>view all service</button>
            </div>
        </div>
    )
}

export default AboutBody