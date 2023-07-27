import { Location, useLocation } from "react-router-dom";
import classNames from "classnames";
import { ABOUT_PATH, CONTACT_PATH, HOME_PATH } from "../../utils/constant";

function TopPane() {
  const location: Location = useLocation();
  const { pathname } = location;

  return (
    <nav className="top-pane d-flex align-items-center justify-content-between px-3 py-4">
      <div>
        <a href="#">Your Brand</a>
      </div>
      {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button> */}
      <div className="top-pane-nav">
        <ul className="navbar-ul">
          <li className={classNames("nav-item", {"active": pathname === HOME_PATH})}>
            <a className="nav-link" href={HOME_PATH}>
              Home
            </a>
          </li>
          <li className={classNames("nav-item", {"active": pathname === ABOUT_PATH})}>
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
