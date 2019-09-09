import Layout from "./components/Layout";
import '../styling/callForPresentationsStyles.scss';
export default function CallForPresentations() {
  return (
    <div className="callForPresentations">
      <Layout>
        <div className="cfp">
          <h1 className="title">Call for presentations</h1>
          <p className="info">
            We are now looking for speakers for the conference, the basic idea is to share knowledge and experiences with other developers within Knowit. The length of a presentation can be 10, 30, 60 or 90 minutes. You decide! The subject for a talk can vary widely, here are just a few ideas:
                </p>
          <a href="" className="register-button">Register Your Presentation</a>
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

          <a href="" className="register-button">Register Your Presentation</a>
        </div>
      </Layout>
    </div>
  );
}
