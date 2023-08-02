import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import myImage from '../../assets/leo_image2.png';
import { Location, useLocation, useNavigate } from "react-router-dom";
import * as SVGComponents from "../../styles/svgIcons";

function AboutPage() {
  const location: Location = useLocation();
  const navigate = useNavigate();

  const navigateToAbout = () => {
    navigate("/about");
  }

    return (
      <>
      <div className="container d-flex align-items-center about-page-wrapper pt-4">
        <div className="w-100 d-flex align-items-center flex-direction-column pt-5">
          
            <h2 className="f-48 font-weight-bold">My skills</h2>

            <div className="w-100">
              <div className="d-flex align-items-center justify-content-between p-3">
                <div className="card-item">

                </div>
                <div className="card-item">

                </div>
                <div className="card-item">

                </div>
                <div className="card-item">

                </div>
              </div>
            </div>
          

        </div>
        
        
      </div>
      <div className="shape1-container">
        <SVGComponents.Shape1 className="shape1-svg" />
      </div>
      <div className="shape2-container">
        <SVGComponents.Shape2 className="shape2-svg" />
      </div>
      <div className="shape3-container">
        <SVGComponents.Shape3 className="shape3-svg" />
      </div>
    </>
    )
  }
  
export default AboutPage