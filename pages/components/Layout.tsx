import "../../styling/headerStyles.scss";
import "../../styling/styling.scss";
import Menu from "./Menu";
import Filter from "./Filter";
import Link from "next/link";
import React from 'react';



class Layout extends React.Component<any, any> {
  render() {
    return (
      <div className="layout">
        <div className="menuAndHeader">
          <div className="header">
            {!this.props.hideLogo && (<Link href="/">
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
              {this.props.header}
            </div>
          </div>
          {this.props.filter && <Filter onChange={this.props.onFilterChange} selectedTags={this.props.selectedTags}/>}

          <Menu />
        </div>
        {this.props.background && <img src="../static/code.svg" className="background" />}
        <div className="content">
          {this.props.children}
        </div>
      </div >
    );
  }
}


export default Layout;