import Layout from "./components/Layout";
import Link from 'next/link';
import '../styling/callForPresentationsStyles.scss';
import RegisterButton from './components/RegisterButton';

export default function CallForPresentations() {
  return (
    <div className="callForPresentations">
      <Layout header={<RegisterButton></RegisterButton>} background={true}>
        <div className="cfp">
          <div className="document">
            <h1 className="title">Call for presentations</h1>
            <p className="info">
              We are now looking for speakers for the conference, the basic idea is to share knowledge and experiences with other developers within Knowit. The length of a presentation can be 10, 30, 60 or 90 minutes. You decide!
              <br></br><br></br>
              If you have any questions feel free to contact us at&nbsp;
              <a className="link" href="mailto:kds@knowit.no">kds@knowit.no</a>
              <br></br><br></br>
                The subject for a talk can vary widely, you can check out last years program&nbsp;
              <Link href="/static/old/index_2019.html">
                  <a className="link">here</a>
                </Link>
                &nbsp;for inspiration. If that is not inspiring enough, here are a few more ideas: 
            </p>
              <RegisterButton className="upper"></RegisterButton>
              <ul className="list">
                <li><span>A customer project from a technical perspective. Project experience reports are really valuable.</span></li>
                <li><span>JavaScript frameworks or frontend techniques in general</span></li>
                <li><span>Mobile platforms like iOS or Android</span></li>
                <li><span>Platforms like EPiServer and Office 365</span></li>
                <li><span>BDD, TDD, DDD or other methodologies</span></li>
                <li><span>Architecture, styles, patterns like Hexagonal, Event sourcing, CQRS, Actor model, Event streams or other patterns</span></li>
                <li><span>Platforms and languages like .NET, JVM, Kotlin, Scala, Swift, Go</span></li>
                <li><span>DevOps, Continuous Delivery, Continuous Deployment, Jenkins, Team City</span></li>
                <li><span>Docker, Cloud, Orchestration (Kubernetes, …)</span></li>
                <li><span>Process, service design, design thinking, modern product development, agile organizations</span></li>
                <li><span>UX (web design, interaction design, ...)</span></li>
                <li><span>Web analytics and performance</span></li>
                <li><span>Security on all levels</span></li>
                <li><span>Machine learning, AI</span></li>
                <li><span>Blockchain</span></li>
                <li><span>Tech culture and way of working</span></li>
                <li><span>API's in the real world. API management.</span></li>
                <li><span>Performance or amazing debugging techniques</span></li>
                <li><span>GDPR - The aftermath?</span></li>
                <li><span>... or any of a numerous of other interesting subjects.</span></li>
              </ul>
              <RegisterButton></RegisterButton>
          </div>
          </div>
      </Layout>
    </div>
      );
    }
