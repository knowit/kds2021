import Link from "next/link";
import "../../styling/menuStyles.scss";

const Menu = () => (
  <nav role="navigation">
    <div id="menuToggle">
      <input type="checkbox" />
      <div className="menuButton">
        <span className="top" />
        <span className="middle" />
        <span className="bottom" />
      </div>
      <div id="menu">
        <h1 className="menuHeader"></h1>
        <Link href="/callForPresentations">
          <a className="link callForPresentations">Call for presentations</a>
        </Link>
        {/*<Link href="/practicalities">
          <a className="link practicalities">Practicalities</a>
        </Link>
        <Link href="/schedule" >
          <a className="link schedule">Schedule</a>
        </Link>
        <Link href="/talksAndSpeakers">
          <a className="link talksAndSpeakers">Talks and speakers</a>
        </Link>
        <Link href="/location">
          <a className="link location">Location</a>
        </Link>*/}

        <Link href="/codeOfConduct">
          <a className="link codeOfConduct">Code of conduct</a>
        </Link>
        <Link href="/aboutUs">
          <a className="link aboutUs">About us</a>
        </Link>
        <Link href="/static/old/index_2019.html">
          <a className="link">Last years program</a>
        </Link>
      </div>
    </div>
  </nav>
);

export default Menu;
