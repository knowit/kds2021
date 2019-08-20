import Menu from "./Menu";
import "../../styling/headerStyles.scss";

const Layout = props => (
  <div >
    <div className="menuAndHeader">

      <div className="header">
        <img id="KDSlogo" src="../static/KDSsymbol.svg" />
        <div id="KDSheader">
          <h2 className="headline">
            By Developers, For Developers
          </h2>
          <h3 className="header-location">
            <img id="location-img" src="../static/location.svg" />
            Bergen, Norway 17 - 18 January<hr />
          </h3>
          <h4 className="header-subheadline">For the 2019-program, <a className="subheadline-link" href="/static/old/index_2019.html"> see here </a></h4>

        </div>
      </div>
      <Menu />
    </div>
    {props.children}
  </div>
);

export default Layout;
