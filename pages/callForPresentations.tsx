import Link from "next/link";
import { Layout, RegisterButton } from "../components";

const callForPresentations = () => {
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
              The deadline for speaker registration was on <strong>the 1st September 2021</strong> and registration is now closed.
            </p>
            <p>
              If you wish to be registered to the waiting list for late speakers or have any questions feel free to contact us at&nbsp;
              <span>
                <a className="link" href="mailto:kds@knowit.no">
                  kds@knowit.no
                </a>
              </span>
            </p>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default callForPresentations;
