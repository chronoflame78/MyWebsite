import myImage from '../../assets/leo_image2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Location, useLocation, useNavigate } from "react-router-dom";
import * as SVGComponents from "../../styles/svgIcons";
import AboutPage from "../info/aboutPage";
import ContactPage from "../contact/contactPage";
import { useRef, useEffect } from "react";
import { ABOUT_PATH, CONTACT_PATH, HOME_PATH } from "../../utils/constant";

function HomePage() {
  const location: Location = useLocation();
  const { pathname } = location;
  const navigate = useNavigate();
  const aboutPageRef = useRef<HTMLDivElement>(null);
  const contactPageRef = useRef<HTMLDivElement>(null);

  const navigateToAbout = () => {
    navigate("/about");
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToAboutPage = () => {
    aboutPageRef?.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContactPage = () => {
    contactPageRef?.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if(pathname === HOME_PATH){
      scrollToTop();
    }
    else if(pathname === ABOUT_PATH){
      scrollToAboutPage();
    }
    else if(pathname === CONTACT_PATH){
      scrollToContactPage();
    }
      
  });

  return (
    <>
      <div className="container d-flex align-items-center home-page-wrapper">
        <div className="row w-100">
          <div className="d-flex flex-direction-column col-sm-12 info-container">
            <h2 className="font-weight-bold hello-text">Hello,</h2>
            <h2 className="font-weight-bold name-text">I Am Leo.</h2>
            <h5 className="font-weight-bold primary-color-2 title-text">Front-end developer</h5>
            <div className="description-text">
              Front-end Developer with over 2 years of experience. Experienced with JavaScript and React framework.
            </div>
            <div className="button-container">
              <button type="button" onClick={() => navigateToAbout()} className="f-18 btn btn-primary-custom font-weight-bold py-3 px-4 d-flex align-items-center">
                More about me <FontAwesomeIcon className="ml-3" icon="arrow-right" size="1x" color="#ffffff" />
              </button>
            </div>
          </div>
          <div className="col-sm-12 image-container">
            <img className="main-image" src={myImage} alt=""/>
            <div className="react-logo-container logo-container">
              <div className="bg-container">
                <SVGComponents.LogoReact className="react-logo"/>
              </div>
            </div>
            <div className="js-logo-container logo-container">
              <div className="bg-container">
                <SVGComponents.LogoJS className="js-logo"/>
              </div>
            </div>
            <div className="redux-logo-container logo-container">
              <div className="bg-container">
                <SVGComponents.LogoRedux className="redux-logo"/>
              </div>
            </div>
            <div className="sass-logo-container logo-container">
              <div className="bg-container">
                <SVGComponents.LogoSass className="sass-logo"/>
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
      <div ref={aboutPageRef}>
        <AboutPage/>
      </div>
      <div ref={contactPageRef}>
        <ContactPage/>
      </div>
    </>
  )
}

export default HomePage