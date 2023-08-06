import { Location, useLocation, useNavigate } from "react-router-dom";
import * as SVGComponents from "../../styles/svgIcons";
import CardItem from "./cardItem";
import { skillItems, workExperienceItems } from "./constant";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function AboutPage() {
  const location: Location = useLocation();
  const navigate = useNavigate();

  const navigateToAbout = () => {
    navigate("/about");
  }

    return (
    <div className="about-page-wrapper">
      <section className="skills-section">
        <div className="container d-flex align-items-center">
          <div className="w-100 d-flex flex-direction-column pt-4">
            
              <div>
                <p className="f-20 font-weight-bold text-gray mb-1">MY SKILLS</p>
                <h2 className="f-60 font-weight-bold pb-4 text-gray">Technologies.</h2>
              </div>
              

              <div className="flex-fill pl-4">
                <div className="d-flex align-items-center justify-content-between p-3 mb-4">
                  {skillItems.slice(0, 4).map((x, index) => <CardItem key={index} itemName={x.itemName} logo={x.logo}/>)}
                </div>
                <div className="d-flex align-items-center justify-content-between p-3">
                  {skillItems.slice(4, 8).map((x, index) => <CardItem key={index} itemName={x.itemName} logo={x.logo}/>)}
                </div>
              </div>
            

          </div>
          
          
        </div>
      </section>
      <section className="experience-section">
        <div className="container d-flex align-items-center">
          <div className="w-100 d-flex flex-direction-column pt-4 align-items-center">
            
              
                <h2 className="f-48 font-weight-bold mb-4 text-center">My Work Experience</h2>
                <p className="f-18 font-weight-bold pb-4 work-des-txt text-center">
                  Must explain to you how all this mistaken idea of denouncing pleasure born and give you a complete account the system
                </p>

                <div className="w-100">
                  {workExperienceItems.map((x, index) => (
                    <div key={index} className="we-item">
                        <div className="period-txt">{x.period}</div>
                        <div>{x.logo}</div>
                        <div>
                          <div className="position-txt">{x.position}</div>
                          <div className="company-txt">{x.company}</div>
                        </div>
                        <div><a className="website-link" target="_blank" href={x.link}><FontAwesomeIcon className="mr-2" icon="arrow-right" size="1x" />Go to website</a></div>
                    </div>
                  ))}
                </div>
              
              
            

          </div>
          
          
        </div>
      </section>
      <div className="shape3-container">
        <SVGComponents.Shape3 className="shape3-svg" />
      </div>
    </div>
    )
  }
  
export default AboutPage