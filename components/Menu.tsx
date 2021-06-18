import React from "react";
import Link from "next/link";

import "../styling/menuStyles.scss";

const Menu = () => {
  return (
    <nav role="navigation">
      <div id="menuToggle">
        <input type="checkbox" className="menu" />
        <div className="menuButton">
          <span className="top" />
          <span className="middle" />
          <span className="bottom" />
        </div>

        <div id="filter"></div>
        <div id="menu">
          <h1 className="menuHeader">Menu</h1>
          <Link href="/callForPresentations">
            <a className="link callForPresentations">Call for Presentations</a>
          </Link>
          <Link href="/practicalities">
            <a className="link practicalities">Practicalities</a>
          </Link>
          {/*<Link href="/schedule">
            <a className="link schedule">Schedule</a>
  </Link> */}
            <Link href="/aboutUs">
            <a className="link aboutUs">About us</a>
          </Link> 

          {/*<Link href="/talksAndSpeakers">
            <a className="link talksAndSpeakers">Talks and speakers</a>
        </Link> */}
          <Link href="/location">
            <a className="link location">Location</a>
          </Link>
          <Link href="/codeOfConduct">
            <a className="link codeOfConduct">Code of Conduct</a>
          </Link>
          <Link href="/logo">
            <a className="link logo">Logo</a>
          </Link>
          <Link href="https://kds-archive.knowit.no/schedule">
            <a className="link">Last year's program</a>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Menu;
