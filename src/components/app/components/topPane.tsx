import {
  Link,
  Location,
  redirect,
  useLocation,
  useNavigate,
} from "react-router-dom";
import classNames from "classnames";
import { ABOUT_PATH, CONTACT_PATH, HOME_PATH } from "../../../utils/constant";
import * as SVGComponents from "../../../styles/svgIcons";
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function TopPane(props) {
  const location: Location = useLocation();
  const navigate = useNavigate();
  const { pathname } = location;
  const [navbarColor, setNavbarColor] = useState('transparent');

  const handleScroll = () => {
    // Change the navbar color based on the scroll position
    const scrolled = window.scrollY;
    const breakpoint = 80; // Adjust this value to determine when to change the color
    const newNavbarColor = scrolled > breakpoint ? '#ffffff' : 'transparent';
    setNavbarColor(newNavbarColor);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const redirectToHomePage = () => {
    navigate("/home");
  };

  return (
    <div className="top-pane-container" style={{backgroundColor: navbarColor}}>
      <nav className="top-pane container d-flex align-items-center justify-content-between">
        {/* <button className="menu-toggle-button" type="button">
          <FontAwesomeIcon
              className=""
              icon="bars"
              size="lg"
              color="#ffffff"
            />
        </button> */}
        <div className="h-cursor" onClick={() => redirectToHomePage()}>
          {/* <SVGComponents.IconLeo className="leo-icon mr-2" /> */}
          <span className="f-20 font-weight-bold primary-color-2">Leo Nguyen</span>
        </div>
        
        <div className="top-pane-nav">
          <ul className="navbar-ul">
            <li
              className={classNames("nav-item mr-2", {
                active: pathname === HOME_PATH,
              })}
            >
              <Link className="nav-link" to={HOME_PATH}>
                Home
              </Link>
            </li>
            <li
              className={classNames("nav-item mr-2", {
                active: pathname === ABOUT_PATH,
              })}
            >
              <Link className="nav-link" to={ABOUT_PATH}>
                About
              </Link>
            </li>
            <li
              className={classNames("nav-item", {
                active: pathname === CONTACT_PATH,
              })}
            >
              <Link className="nav-link" to={CONTACT_PATH}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default TopPane;
