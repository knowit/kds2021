import Link from "next/link";
import { Layout, RegisterButton } from "../components";

const participantRegistration = () => {
  return (
    <div className="callForPresentations page">
      <Layout
        title="Participant Registration"
        header={
          <RegisterButton
            url="https://docs.google.com/forms/d/e/1FAIpQLSdrjECzitSMyHgff-daChQnXsfb3Ulph1uauXgt-STzi1xUdA/viewform"
            name="Participant Registration"
          ></RegisterButton>
        }
        background={true}
      >
        <div className="document cfp">
          <h1 className="title">Knowit Developer Summit 2021 </h1>
          <div className="info">
            <p>
            The time has come to register for this year's event at Knowit!
            For the 8th time, we are running Knowit Developer Summit.
            The date is set to the 12th – 13th of November 2021, at the Scandic Continental Hotel in Stockholm, Sweden.
            The conference begins with lunch on Friday and ends on Saturday afternoon.
            As before, the motto for the conference is “By Developers, For Developers!” {" "}
            </p>
            <p>For more information about the conference, see the&nbsp;
              <Link href="/Practicalities">
                <a className="link">practical information</a>
              </Link>
              &nbsp;page.
            </p>
            <p>
          Registration Closed on the <strong>7th of October 2021</strong>. Note that no participant registration was necessary if presenting.
            We may still be able to accept late registration, but contact kds@knowit.no for further inquries on this.

            </p>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default participantRegistration;
