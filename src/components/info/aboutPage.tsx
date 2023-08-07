import { Location, useLocation, useNavigate } from "react-router-dom";
import * as SVGComponents from "../../styles/svgIcons";
import CardItem from "./cardItem";
import { skillItems, workExperienceItems } from "./constant";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

function AboutPage() {
  const location: Location = useLocation();
  const navigate = useNavigate();

  const navigateToAbout = () => {
    navigate("/about");
  }

    return (
    <div className="about-page-wrapper">
      <section className="skills-section">
        <div className="container h-100 d-flex align-items-center">
          <div className="w-100 h-100 d-flex flex-direction-column justify-content-evenly pt-4">
            
              <div>
                <p className="f-20 font-weight-bold text-gray mb-1">MY SKILLS</p>
                <h2 className="f-60 font-weight-bold pb-4">Technologies.</h2>
              </div>
              

              <div className="position-relative">
                <Swiper 
                navigation={true}
                slidesPerView={4}
                spaceBetween={36}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                }}
                modules={[Autoplay, Pagination, Navigation]}
                loop={true}
                speed={1500}
                className="mySwiper p-3">
                  {
                    skillItems.map((x, index) => (
                      <SwiperSlide>
                        <CardItem key={index} itemName={x.itemName} logo={x.logo}/>
                      </SwiperSlide>
                    ))
                  }
                </Swiper>
              </div>
            

          </div>
          
          
        </div>
      </section>
      <section className="experience-section">
        <div className="container d-flex align-items-center">
          <div className="w-100 d-flex flex-direction-column pt-4 pb-4 align-items-center">
            
              
                <h2 className="f-48 font-weight-bold mb-4 text-center">My Work Experience</h2>
                <p className="f-18 font-weight-bold pb-4 work-des-txt text-center">
                  Must explain to you how all this mistaken idea of denouncing pleasure born and give you a complete account the system
                </p>

                <div className="w-100">
                  {workExperienceItems.map((x, index) => (
                    <div key={index} className="we-item">
                        <div className="period-txt">{x.period}</div>
                        <div className="item-logo">{x.logo}</div>
                        <div className="w-300">
                          <div className="position-txt">{x.position}</div>
                          <div className="company-txt">{x.company}</div>
                        </div>
                        <div>
                          <a className="website-link" target="_blank" href={x.link}>
                            <FontAwesomeIcon className="mr-3 icon-arrow" icon="arrow-right" size="1x" />
                            Go to website
                          </a>
                        </div>
                    </div>
                  ))}
                </div>
              
              
            

          </div>
          
          
        </div>
      </section>
      <div className="shape32-container">
        <SVGComponents.Shape3 className="shape32-svg" />
      </div>
    </div>
    )
  }
  
export default AboutPage