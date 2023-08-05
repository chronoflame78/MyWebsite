import { Location, useLocation, useNavigate } from "react-router-dom";
import * as SVGComponents from "../../styles/svgIcons";
import CardItem from "./cardItem";
import { cardItems } from "./constant";

function AboutPage() {
  const location: Location = useLocation();
  const navigate = useNavigate();

  const navigateToAbout = () => {
    navigate("/about");
  }

    return (
    <div className="about-page-wrapper">
      <div className="container d-flex align-items-center sub-page-wrapper">
        <div className="w-100 d-flex flex-direction-column pt-4">
          
            <div>
              <p className="f-20 font-weight-bold text-gray mb-1">MY SKILLS</p>
              <h2 className="f-60 font-weight-bold pb-4 text-gray">Technologies.</h2>
            </div>
            

            <div className="flex-fill pl-4">
              <div className="d-flex align-items-center justify-content-between p-3 mb-4">
                {cardItems.slice(0, 4).map((x, index) => <CardItem key={index} itemName={x.itemName} logo={x.logo}/>)}
              </div>
              <div className="d-flex align-items-center justify-content-between p-3">
                {cardItems.slice(4, 8).map((x, index) => <CardItem key={index} itemName={x.itemName} logo={x.logo}/>)}
              </div>
            </div>
          

        </div>
        
        
      </div>
      <div className="container d-flex align-items-center sub-page-wrapper">
        <div className="w-100 d-flex flex-direction-column pt-4 align-items-center">
          
            
              <h2 className="f-48 font-weight-bold mb-4 text-center">My Work Experience</h2>
              <p className="f-18 font-weight-bold pb-4 work-des-txt text-center">
                Must explain to you how all this mistaken idea of denouncing pleasure born and give you a complete account the system
              </p>
            
            
          

        </div>
        
        
      </div>
      <div className="shape3-container">
        <SVGComponents.Shape3 className="shape3-svg" />
      </div>
    </div>
    )
  }
  
export default AboutPage