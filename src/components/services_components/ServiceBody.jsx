import Service from './services/Service'
import { AiFillHome } from "react-icons/ai"

const ServiceBody = () => {
    return (
        <div className='service_body'>
            <div className='services'>
                <Service icon={AiFillHome} />
                <Service />
                <Service />
                <Service />
            </div>
        </div>
    )
}

export default ServiceBody