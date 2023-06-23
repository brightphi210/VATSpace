import Service from './services/Service'
import { AiFillHome } from "react-icons/ai"
import { BsHouseLockFill } from 'react-icons/bs'
import { MdRealEstateAgent } from 'react-icons/md'
import { GiHouseKeys } from 'react-icons/gi'

import { Link } from 'react-router-dom'

const ServiceBody = () => {
    return (
        <div className='service_body'>
            <div className='services'>
                <Link to={'/physical'}>
                    <Service icon={<AiFillHome />} service={"Property Sales/Mgn."} description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."} />
                </Link>
                <Link to={"/physical"}>
                    <Service icon={<GiHouseKeys />} service={"House Sales/Rent."} description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."} />
                </Link>
                <Service icon={<MdRealEstateAgent />} service={"Real Estate"} description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."} />
                <Service icon={<BsHouseLockFill />} service={"NFT Property Sales"} description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."} />
            </div>
        </div>
    )
}

export default ServiceBody