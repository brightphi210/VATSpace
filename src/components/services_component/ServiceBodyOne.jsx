
const ServiceBodyOne = () => {
    return (
        <div>
            <section className="body_one">
                <div >
                    <div>
                        <h2>Explore Houses</h2>
                        <p>Choose from the most advantageous offers</p>
                    </div>
                    <div className="all_button_flex">
                        <div className="button_flex">
                            <input type="text" placeholder="Min price . . ." />
                            <input type="text" placeholder="Max price . . ." />
                            <button className="btn active">For Sale</button>
                            <button className="btn">For Rent</button>
                        </div>
                        <div className="input_map_one">
                            <select className="minimalOne">
                                <option>Renting</option>
                                <option>Buying</option>
                                <option>NFT</option>
                            </select>


                            <div className="map2">
                                <i className="uil uil-map-marker-alt location_icon"></i>
                                <input type="text" placeholder="Search for location" />
                            </div>

                            <button>Search <i className="uil uil-message" style={{ paddingLeft: 10, fontSize: 15 }}></i></button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ServiceBodyOne