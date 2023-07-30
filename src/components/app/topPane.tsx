import { Location, redirect, useLocation, useNavigate } from "react-router-dom";
import classNames from "classnames";
import { ABOUT_PATH, CONTACT_PATH, HOME_PATH } from "../../utils/constant";
import * as SVGComponents from "../../styles/svgIcons";

function TopPane(props) {
  const location: Location = useLocation();
  const navigate = useNavigate();
  const { pathname } = location;

  const redirectToHomePage = () => {
    navigate("/home");
  }

  return (
    <nav className="top-pane container d-flex align-items-center justify-content-between py-4">
      <div className="h-cursor" onClick={() => redirectToHomePage()}>
        <SVGComponents.IconLeo className="leo-icon mr-2"/>
        <span className="f-20 font-weight-bold primary-color-2">Leo</span>
      </div>
      {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button> */}
      <div className="top-pane-nav">
        <ul className="navbar-ul">
          <li className={classNames("nav-item mr-2", {"active": pathname === HOME_PATH})}>
            <a className="nav-link" href={HOME_PATH}>
              Home
            </a>
          </li>
          <li className={classNames("nav-item mr-2", {"active": pathname === ABOUT_PATH})}>
            <a className="nav-link" href={ABOUT_PATH}>
              About
            </a>
          </li>
          <li className={classNames("nav-item", {"active": pathname === CONTACT_PATH})}>
            <a className="nav-link" href={CONTACT_PATH}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default TopPane;
