import React from "react";
import Link from "next/link";

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
          {/*<Link href="/ParticipantRegistration">
            <a className="link participantRegistration">Participant Registration</a>
          </Link>
          <Link href="/CallForPresentations">
            <a className="link callForPresentations">Call for Presentations</a>
  </Link>*/}
          <Link href="/Practicalities">
            <a className="link practicalities">Practicalities</a>
          </Link>
          <Link href="/Schedule">
            <a className="link schedule">Schedule</a>
          </Link>
          <Link href="/ConventionMap">
            <a className="link conventionMap">Convention Map</a>
          </Link>
          <Link href="/AboutKds">
            <a className="link aboutKds">About KDS</a>
          </Link>

          <Link href="/TalksAndSpeakers">
            <a className="link talksAndSpeakers">Talks and speakers</a>
          </Link>
          <Link href="/Location">
            <a className="link location">Location</a>
          </Link>
          <Link href="/CodeOfConduct">
            <a className="link codeOfConduct">Code of Conduct</a>
          </Link>
          <Link href="/Statistics">
            <a className="link statistics">Statistics</a>
          </Link>
          <Link href="/Logo">
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
