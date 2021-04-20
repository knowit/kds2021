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
