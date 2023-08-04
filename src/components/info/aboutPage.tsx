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
        <div className="w-100 d-flex flex-direction-column pt-4">
          
            <div>
              <p className="f-20 font-weight-bold text-gray mb-1">MY SKILLS</p>
              <h2 className="f-60 font-weight-bold pb-4 text-gray">Technologies.</h2>
            </div>
            

            <div className="flex-fill pl-4">
              <div className="d-flex align-items-center justify-content-between p-3 mb-4">
                <div className="card-item py-4">
                  <div>
                    <SVGComponents.LogoReact className="logo-react"/>
                  </div>
                  <div className="f-20 font-weight-bold">
                    React
                  </div>
                </div>
                <div className="card-item py-4">
                  <div>
                    <SVGComponents.LogoJS className="logo-javascript"/>
                  </div>
                  <div className="f-20 font-weight-bold">
                    Javascript
                  </div>
                </div>
                <div className="card-item py-4">
                  <div>
                    <SVGComponents.LogoTS className="logo-typescript"/>
                  </div>
                  <div className="f-20 font-weight-bold">
                    Typescript
                  </div>
                </div>
                <div className="card-item py-4">
                  <div>
                    <SVGComponents.LogoRedux className="logo-redux"/>
                  </div>
                  <div className="f-20 font-weight-bold">
                    Redux
                  </div>
                </div>
              </div>
              <div className="d-flex align-items-center justify-content-between p-3">
                <div className="card-item py-4">

                </div>
                <div className="card-item py-4">

                </div>
                <div className="card-item py-4">

                </div>
                <div className="card-item py-4">

                </div>
              </div>
            </div>
          

        </div>
        
        
      </div>
      <div className="container d-flex align-items-center about-page-wrapper height-100vh pt-4">
        <div className="w-100 d-flex flex-direction-column pt-4 align-items-center">
          
            
              <h2 className="f-48 font-weight-bold mb-4 text-center">My Work Experience</h2>
              <p className="f-18 font-weight-bold pb-4 work-des-txt text-center">
                Must explain to you how all this mistaken idea of denouncing pleasure born and give you a complete account the system
              </p>
            
            
          

        </div>
        
        
      </div>
      {/* <div className="shape1-container">
        <SVGComponents.Shape1 className="shape1-svg" />
      </div>
      <div className="shape2-container">
        <SVGComponents.Shape2 className="shape2-svg" />
      </div> */}
      <div className="shape3-container">
        <SVGComponents.Shape3 className="shape3-svg" />
      </div>
    </>
    )
  }
  
export default AboutPage