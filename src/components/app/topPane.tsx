import { Link, Location, redirect, useLocation, useNavigate } from "react-router-dom";
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
            <Link className="nav-link" to={HOME_PATH}>
              Home
            </Link >
          </li>
          <li className={classNames("nav-item mr-2", {"active": pathname === ABOUT_PATH})}>
            <Link  className="nav-link" to={ABOUT_PATH}>
              About
            </Link >
          </li>
          <li className={classNames("nav-item", {"active": pathname === CONTACT_PATH})}>
            <Link  className="nav-link" to={CONTACT_PATH}>
              Contact
            </Link >
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default TopPane;
