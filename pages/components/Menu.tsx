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


const Menu = () => (
  <nav role="navigation">
    <div id="menuToggle">
      <input type="checkbox" />
      <div className="menuButton">
        <span />
        <span />
        <span />
      </div>
      <div id="menu">
        <Link href="/callForPresentations">
          <a className="link callForPresentations">Call for presentations</a>
        </Link>
        <Link href="/talksAndSpeakers">
          <a className="link talksAndSpeakers">Talks and speakers</a>
        </Link>
        <Link href="/schedule" >
          <a className="link schedule">Schedule</a>
        </Link>
        {/*<Link href="/practicalities">
          <a className="link practicalities">Practicalities</a>
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
        <AddTalkLink></AddTalkLink>
        <ProgramBuilderLink></ProgramBuilderLink>
      </div>
    </div>
  </nav>
);

export default Menu;
