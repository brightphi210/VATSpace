


const ServiceBodyOne = () => {
    return(
        <div className="body_one">
            <div >
                <div>
                    <h2>Explore House</h2>
                    <p>Choose from the most advantageous offers</p>
                </div>
                <div className="all_button_flex">
                    <div className="button_flex">
                        <input type="text" placeholder="Min price . . ."/>
                        <input type="text" placeholder="Max price . . ."/>
                        <button className="btn active">For Sale</button>
                        <button className="btn">For Rent</button>
                    </div>
                    <div className="input_map">
                        <select className="minimal">
                            <option>Renting</option>
                            <option>Buying</option>
                            <option>NFT</option>
                        </select>
                    

                        <div className="map2">
                            <i className="uil uil-map-marker-alt"></i>
                            <input type="text" placeholder="Search for location" />
                        </div>

                        <button>Search <i className="uil uil-message" style={{paddingLeft: 10,  fontSize:15}}></i></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServiceBodyOne