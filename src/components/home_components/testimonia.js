
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import profile from "./images/Profile.png"
import profile1 from "./images/Profile-1.png"
import profile2 from "./images/Profile-2.png"
import quote from "./images/“.png"



const Testimony = () =>{
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
        <div className='testimony'>

          <div className='allTestimony'>
            <div>
            <h2>our clients speak</h2>
              <p>
                We have been working with clients around the world
              </p>
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

                <div className='eachTestimony'>
                    <img src={quote} alt="" />
                    <h2>Professional Partner</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Auctor non sit sed magna pharetra in amet porta enim.
                    </p>
                    <img src={profile} alt="" />
                    <h3>John Alex</h3>
                </div>

                <div className='eachTestimony'>
                    <img src={quote} alt="" />
                    <h2>Professional Partner</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Auctor non sit sed magna pharetra in amet porta enim.
                    </p>
                    <img src={profile1} alt="" />
                    <h3>John Alex</h3>
                </div>

                <div className='eachTestimony'>
                    <img src={quote} alt="" />
                    <h2>Professional Partner</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Auctor non sit sed magna pharetra in amet porta enim.
                    </p>
                    <img src={profile2} alt="" />
                    <h3>John Alex</h3>
                </div>

                <div className='eachTestimony'>
                    <img src={quote} alt="" />
                    <h2>Professional Partner</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Auctor non sit sed magna pharetra in amet porta enim.
                    </p>
                    <img src={profile} alt="" />
                    <h3>John Alex</h3>
                </div>

                <div className='eachTestimony'>
                    <img src={quote} alt="" />
                    <h2>Professional Partner</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Auctor non sit sed magna pharetra in amet porta enim.
                    </p>
                    <img src={profile1} alt="" />
                    <h3>John Alex</h3>
                </div>
          </Carousel>
        </div>
        
    )
}

export default Testimony