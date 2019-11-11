import React from 'react';
import Link from "next/link";
import "../../styling/menuStyles.scss";
import ApiHandler from '../../helpers/apiHandler';
import { auth } from '../../firebase_utils';

class Menu extends React.Component<any, any> {
  constructor(props) {
    super(props);

    this.state = {
      isSpeaker: false,
      isAdmin: false,
    }
  }

  async componentDidMount() {

    auth.onAuthStateChanged(async (val) => {
      if (val) {
        const [speakerRes, adminRes] = await Promise.all([await ApiHandler.isSpeaker(), await ApiHandler.isAdmin()]);

        this.setState({
          isSpeaker: speakerRes,
          isAdmin: adminRes
        });
      }
    });
  }

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
            <Link href="/practicalities">
              <a className="link practicalities">Practicalities</a>
            </Link>
            <Link href="/schedule" >
              <a className="link schedule">Schedule</a>
            </Link>
            <Link href="/talksAndSpeakers">
              <a className="link talksAndSpeakers">Talks and speakers</a>
            </Link>
            {this.state.isSpeaker &&
              <Link href="/addTalk">
                <a className="link addTalk">Add talk</a>
              </Link>}
            <Link href="/location">
              <a className="link location">Location</a>
            </Link>
            <Link href="/codeOfConduct">
              <a className="link codeOfConduct">Code of conduct</a>
            </Link>
            <Link href="/static/old/index_2019.html">
              <a className="link">Last years program</a>
            </Link>
            <Link href="/aboutUs">
              <a className="link aboutUs">About us</a>
            </Link>{this.state.isAdmin &&
              <Link href="/settings">
                <a className="link settigns">Settings</a>
              </Link>}
          </div>
        </div>
      </nav>
    );
  }
}


export default Menu;
