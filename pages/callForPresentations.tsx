import Link from "next/link";
import { Layout, RegisterButton } from "../components";

import "../styling/callForPresentationsStyles.scss";

const CallForPresentations = () => {
  return (
    <div className="callForPresentations page">
      <Layout
        title="Call for Presentations"
        header={
          <RegisterButton
            url="https://docs.google.com/forms/d/1-0n_08zyFXJGEHRJ2RM-sFxZZYepEbhxwQigECMXqfs"
            name="Register your presentation"
          ></RegisterButton>
        }
        background={true}
      >
        <div className="document cfp">
          <h1 className="title">Call for Presentations</h1>
          <div className="info">
            <p>
              Knowit Developer Summit (KDS) is Knowit's annual internal software
              developer conference. The 2021 conference will be held on 12 - 13
              November at the Scandic Continental in Stockholm, Sweden.{" "}
            </p>
            <p>
              We are now looking for speakers for the conference, the basic idea
              is to share knowledge and experiences with other developers within
              Knowit. The length of a presentation can be 10, 30, 60 or 90
              minutes. You decide!{" "}
            </p>
            <p>
              Submission deadline is <strong>15th June 2021</strong>.
            </p>
            <p>
              If you have any questions feel free to contact us at&nbsp;
              <span>
                <a className="link" href="mailto:kds@knowit.no">
                  kds@knowit.no
                </a>
              </span>
            </p>
            <p>
              The subject for a talk can vary widely, you can check out last
              years program&nbsp;
              <Link href="https://kds-archive.knowit.no/">
                <a className="link">here</a>
              </Link>
              &nbsp;for inspiration. If that is not inspiring enough, here are a
              few more ideas:
            </p>
            <img className="wordcloud" src="../static/images/WordCloud2021.png" alt="Wordcloud"></img>
          </div>
          <ul className="list">
            <li>
              <span>
                A customer project from a technical perspective. Project
                experience reports are really valuable.
              </span>
            </li>
            <li>
              <span>
                JavaScript frameworks or frontend techniques in general
              </span>
            </li>
            <li>
              <span>Mobile platforms like iOS or Android</span>
            </li>
            <li>
              <span>Platforms like EPiServer and Office 365</span>
            </li>
            <li>
              <span>BDD, TDD, DDD or other methodologies</span>
            </li>
            <li>
              <span>
                Architecture, styles, patterns like Hexagonal, Event sourcing,
                CQRS, Actor model, Event streams or other patterns
              </span>
            </li>
            <li>
              <span>
                Platforms and languages like .NET, JVM, Kotlin, Scala, Swift, Go
              </span>
            </li>
            <li>
              <span>
                DevOps, Continuous Delivery, Continuous Deployment, Jenkins,
                Team City
              </span>
            </li>
            <li>
              <span>Docker, Cloud, Orchestration (Kubernetes, …)</span>
            </li>
            <li>
              <span>
                Process, service design, design thinking, modern product
                development, agile organizations
              </span>
            </li>
            <li>
              <span>UX (web design, interaction design, ...)</span>
            </li>
            <li>
              <span>Web analytics and performance</span>
            </li>
            <li>
              <span>Security on all levels</span>
            </li>
            <li>
              <span>Machine learning, AI</span>
            </li>
            <li>
              <span>Blockchain</span>
            </li>
            <li>
              <span>Tech culture and way of working</span>
            </li>
            <li>
              <span>API's in the real world. API management.</span>
            </li>
            <li>
              <span>Performance or amazing debugging techniques</span>
            </li>
            <li>
              <span>GDPR - The aftermath?</span>
            </li>
            <li>
              <span>
                ... or any of a numerous of other interesting subjects.
              </span>
            </li>
          </ul>
          <RegisterButton
            url="https://docs.google.com/forms/d/1-0n_08zyFXJGEHRJ2RM-sFxZZYepEbhxwQigECMXqfs"
            name="Register your presentation"
          ></RegisterButton>
        </div>
      </Layout>
    </div>
  );
};

export default CallForPresentations;
