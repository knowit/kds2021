import Menu from "./Menu";
import Filter from "./Filter";
import Link from "next/link";
import React from 'react';
import "../../styling/headerStyles.scss";
import "../../styling/styling.scss";


const Layout = props => (
  <div className="layout">
    <div className="menuAndHeader">
      <div className="header">
        {!props.hideLogo && (<Link href="/">
          <img id="KDSlogo" src="../static/KDSsymbol.svg" />
        </Link>)}
        <div id="KDSheader">
          <h2 className="headline">
            By Developers, For Developers
          </h2>
          <h3 className="header-location">
            <img id="location-img" src="../static/location.svg" />
            Bergen, Norway 17 - 18 January 2020<hr />
          </h3>
          {props.header}
        </div>
      </div>
      {props.filter && <Filter onChange={props.onFilterChange} />}

      <Menu />
    </div>
    <div className="content">
      {props.children}
    </div>
  </div >
);

export default Layout;