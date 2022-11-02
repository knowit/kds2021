import Link from "next/link";
import { Layout } from "../components";

const ThankYou = () => {
  return (
    <div className="thankYou page">
      <Layout title="Thank You" background={true}>
        <div className="document coc">
          <h1 className="title">KDS 2023</h1>
          <p className="paragraph">
            We are happy to announce that the preparation for the next Knowit
            Developer Summit - KDS 2023 Copenhagen have started. If you are wondering if we
            skipped a year, fret not. The conference has landed on
            January-February this time, but we'll get back to you on the exact
            date.
          </p>

          <p className="paragraph">
            Call for presentations and more information will arive in the
            beginning of fall 2022. If you wish to help with the work, join
            the comitee, or have any other questions then feel free to mail us
            at
            <Link href="mailto:kds@knowit.no">
              <a className="paragraphLink"> kds@knowit.no </a>
            </Link>
            .
          </p>
          <p className="paragraph">
            In the meantime, you can start to hype yourself by checking out{" "}
            <a className="paragraphLink" href="/TalksAndSpeakers">
              KDS 2021 great program.
            </a>
          </p>

          <p className="paragraph">
            See you soon!
            <br />- KDS Comitee
          </p>
        </div>
      </Layout>
    </div>
  );
};

export default ThankYou;
