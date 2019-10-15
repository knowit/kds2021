import React from 'react';
import Link from "next/link";
import "../../styling/menuStyles.scss";
import withSpeakerAuth from '../../helpers/withSpeakerAuth';
import withAdminAuth from '../../helpers/withAdminAuth';

const AddTalkLink = withSpeakerAuth(props => {
  return (
    <Link href="/addTalk" >
      <a className="link addTalk">Register talk</a>
    </Link>);
});

const ProgramBuilderLink = withAdminAuth(props => {
  return (
    <Link href="/programBuilder" >
      <a className="link programBuilder">Program builder</a>
    </Link>);
});


class Menu extends React.Component<any, any> {
  render() {
    return (
      <nav role="navigation">
        <div id="menuToggle">
          <input type="checkbox" className="menu" />
          <div className="menuButton">
            <span className="top" />
            <span className="middle" />
            <span className="bottom" />
          </div>
  
          <div id="filter">
  
          </div>
          <div id="menu">
            <h1 className="menuHeader">Menu</h1>
            <Link href="/callForPresentations">
              <a className="link callForPresentations">Call for presentations</a>
            </Link>
            {/*<Link href="/practicalities">
            <a className="link practicalities">Practicalities</a>
          </Link>
          <Link href="/schedule" >
            <a className="link schedule">Schedule</a>
          </Link>
          <Link href="/aboutUs">
            <a className="link aboutUs">About us</a>
          </Link>
          <Link href="/talksAndSpeakers">
            <a className="link talksAndSpeakers">Talks and speakers</a>
          </Link>*/}
            <Link href="/location">
              <a className="link location">Location</a>
            </Link>
  
            <Link href="/codeOfConduct">
              <a className="link codeOfConduct">Code of conduct</a>
            </Link>
            <Link href="/static/old/index_2019.html">
              <a className="link">Last years program</a>
            </Link>
          </div>
        </div>
      </nav>
    );
  }
}


export default Menu;
