

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import caro1 from "./images/caro1.png"
import caro2 from "./images/caro2.png"
import caro3 from "./images/caro3.png"

import profile from "./images/Profile.png"

const MyCarousel = () =>{
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };


    return(
        <div className='carosel'>

          <div className='allOffers'>
            <div>
            <h2>Top offers</h2>
              <p>Fulfill your career dreams, enjoy all the achievements 
                of <br /> the city center and luxury housing to the fullest.
              </p>
            </div>
            <div>
              <button>Show all offer <i class="uil uil-message icon2"></i></button>
            </div>

          </div>
          <Carousel 
          responsive={responsive}
          swipeable={true}
          draggable={true}
          showDots={true}
          itemClass="carousel-item-padding-40-px"
          ssr={true}
          infinite={true}
          autoPlaySpeed={100}
          keyBoardControl={true}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass="custom-dot-list-style">

          <div className='eachCarosel'>
            <img src={caro1} alt="" />
            <h2>Large 4-room apartment with a beautiful terrace</h2>
            <div className='profile_flex'>
              <p>320 000€</p>
              <img src={profile} alt="" />
            </div>
          </div>


          <div className='eachCarosel'>
            <img src={caro2} alt="" />
            <h2>Large 4-room apartment with a beautiful terrace</h2>
            <div className='profile_flex'>
              <p>320 000€</p>
              <img src={profile} alt="" />
            </div>
          </div>


          <div className='eachCarosel'>
            <img src={caro3} alt="" />
            <h2>Large 4-room apartment with a beautiful terrace</h2>
            <div className='profile_flex'>
              <p>320 000€</p>
              <img src={profile} alt="" />
            </div>
          </div>


          <div className='eachCarosel'>
            <img src={caro1} alt="" />
            <h2>Large 4-room apartment with a beautiful terrace</h2>
            <div className='profile_flex'>
              <p>320 000€</p>
              <img src={profile} alt="" />
            </div>
          </div>
          </Carousel>
        </div>
        
    )
}
export default MyCarousel