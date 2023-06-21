
import profile from './images/Profile.png'
import profile1 from './images/Profile-1.png'
import profile2 from './images/Profile-2.png'


import news1 from "./images/caro1.png"
import news2 from "./images/caro2.png"
import news3 from "./images/caro3.png"
const Rating = () => {
    return(
        <div className='rating_main'>
            {/* ================= rating ================= */}
            <section className='rating_div'>
                <h2>TOP RATING</h2>
                <div className='rating_btn'>
                    <button>Affiliate</button>
                    <button>Agency</button>
                </div>
                <div className='rating_profile'>
                    <div className='rating_profile_flex'>
                        <img src={profile} alt="" />
                        <div>
                            <h3>Bryan Dominic</h3>
                            <i class="uil uil-star"></i>
                            <i class="uil uil-star"></i>
                            <i class="uil uil-star"></i>
                            <i class="uil uil-star"></i>
                            <i class="uil uil-star"></i>
                        </div>
                    </div>

                    <div className='rating_profile_flex'>
                        <img src={profile2} alt="" />
                        <div>
                            <h3>Lorri Warf</h3>
                            <i class="uil uil-star"></i>
                            <i class="uil uil-star"></i>
                            <i class="uil uil-star"></i>
                            <i class="uil uil-star"></i>
                            <i class="uil uil-star"></i>
                        </div>
                    </div>

                    <div className='rating_profile_flex'>
                        <img src={profile1} alt="" />
                        <div>
                            <h3>Mosh Mohamad</h3>
                            <i class="uil uil-star"></i>
                            <i class="uil uil-star"></i>
                            <i class="uil uil-star"></i>
                            <i class="uil uil-star"></i>
                            <i class="uil uil-star"></i>
                        </div>
                    </div>

                    <div className='right_div'>
                        <i class="uil uil-arrow-circle-right right"></i>
                    </div>
                </div>
            </section>

            {/* ==================== recent news ============ */}
            <section className='recent_news'>
                <h3>Recent News</h3>
                <div className='recent_new_div'>
                    <div className='recent_own_div'>
                        <img src={news1} alt="" />
                        <div>
                            <h3>AGENCY 1</h3>
                            <p>Furnished 2Beedroom Duplex</p>
                            <span>Get Details <i class="uil uil-arrow-right"></i></span>
                        </div>
                    </div>

                    <div className='recent_own_div'>
                        <img src={news2} alt="" />
                        <div>
                            <h3>AGENCY 1</h3>
                            <p>Furnished 2Beedroom Duplex</p>
                            <span>Get Details <i class="uil uil-arrow-right"></i></span>
                        </div>
                    </div>

                    <div className='recent_own_div'>
                        <img src={news3} alt="" />
                        <div>
                            <h3>AGENCY 1</h3>
                            <p>Furnished 2Beedroom Duplex</p>
                            <span>Get Details <i class="uil uil-arrow-right"></i></span>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    )
}

export default Rating