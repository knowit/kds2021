import Layout from "./components/Layout";

export default function CallForPresentations() {
  return (
    <div className="callForPresentations">
      <Layout>
        <div className="content">
            <h1>Call for presentations</h1>
                <p>
                We are now looking for speakers for the conference, the basic idea is to share knowledge and experiences with other developers within Knowit. The length of a presentation can be 10, 30, 60 or 90 minutes. You decide! The subject for a talk can vary widely, here are just a few ideas:
                </p>
                <ul>
                    <li>A customer project from a technical perspective. Project experience reports are really valuable.</li>
                    <li>JavaScript frameworks or frontend techniques in general</li>
                    <li>Mobile platforms like iOS or Android</li>
                    <li>Platforms like EPiServer and Office 365</li>
                    <li>BDD, TDD, DDD or other methodologies</li>
                    <li>Architecture, styles, patterns like Hexagonal, Event sourcing, CQRS, Actor model, Event streams or other patterns</li>
                    <li>Platforms and languages like .NET, JVM, Kotlin, Scala, Swift, Go</li>
                    <li>DevOps, Continuous Delivery, Continuous Deployment, Jenkins, Team City</li>
                    <li>Docker, Cloud, Orchestration (Kubernetes, …)</li>
                    <li>Process, service design, design thinking, modern product development, agile organizations</li>
                    <li>UX (web design, interaction design, ...)</li>
                    <li>Web analytics and performance</li>
                    <li>Security on all levels</li>
                    <li>Machine learning, AI</li>
                    <li>Blockchain</li>
                    <li>Tech culture and way of working</li>
                    <li>API's in the real world. API management.</li>
                    <li>Performance or amazing debugging techniques</li>
                    <li>GDPR - The aftermath?</li>
                    <li>... or any of a numerous of other interesting subjects.</li>
                </ul>

                <p>Registering your presentation</p>
                <p>Registration is not yet open but will be posted as soon as possible</p>
            </div>
        </Layout>
    </div>
  );
}
