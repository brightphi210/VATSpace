import { HiLocationMarker } from 'react-icons/hi'
import { FiPhoneCall } from 'react-icons/fi'
import { SlEnvolope } from 'react-icons/sl'

const HeadOffice = () => {
    return (
        <div className='links'>
            <h2>Head Office</h2>
            <ul>
                <li><i>{<HiLocationMarker />}</i>34 D/line, Port Harcourt, Rivers State</li>
                <li><i>{<FiPhoneCall />}</i>+234 80944 22807, +234 80944 22807</li>
                <li><i>{<SlEnvolope />}</i>example@gmail.com</li>
            </ul>
        </div>
    )
}

export default HeadOffice