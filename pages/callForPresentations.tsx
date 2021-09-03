import Link from "next/link";
import { Layout, RegisterButton } from "../components";

import "../styling/callForPresentationsStyles.scss";

const CallForPresentations = () => {
  return (
    <div className="callForPresentations page">
      <Layout
        title="Call for Presentations"
        
        background={true}
      >
        <div className="document cfp">
          <h1 className="title">Call for Presentations</h1>
          <div className="info">
            <p>
              Knowit Developer Summit (KDS) is Knowit's annual internal software
              developer conference. The 2021 conference will be held on 12 - 13
              November at the Scandic Continental in Stockholm, Sweden.{" "}
              For more information about the conference, see the&nbsp;
              <Link href="/practicalities">
                <a className="link">practical information</a>
              </Link>
              &nbsp;page.
            </p>
            <p>
              While the submision deadline was on 1.st of September 2021, we are 
              currently still accepting new presentations. You may add just a brief 
              abstract and complete it later; the most important thing right now is 
              to get all the presentations registered. You may submit more than one 
              presentation if you wish. You can also hold a joint presentation; maybe 
              you and a colleague are working on something interesting and would like 
              to present it together? The length of a presentation can be 10, 30, 60 
              or 90 minutes. You decide!
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
              <Link href="https://kds-archive.knowit.no/schedule">
                <a className="link">here</a>
              </Link>
              &nbsp;for inspiration. If that is not inspiring enough, here are a
              few more ideas:
            </p>
            <img className="wordcloud" src="../static/images/WordCloud2021.png" alt="Wordcloud"></img>
          </div>
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
