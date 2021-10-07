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
              <Link href="/practicalities">
                <a className="link">practical information</a>
              </Link>
              &nbsp;page.
            </p>
            <p>
            <Link href="https://docs.google.com/forms/d/e/1FAIpQLSdrjECzitSMyHgff-daChQnXsfb3Ulph1uauXgt-STzi1xUdA/viewform">
              <a className="link">Registration</a>
            </Link>
            &nbsp;is open from now until the <strong>7th of October 2021</strong>.Note that if you have proposed a presentation (in the form Call for Presentation) you
            do not need to register. If you have questions about Call for Presentations, you can read about it <Link href="/CallForPresentations"><a className="link">here</a></Link>.
            {" "}
            </p>

            <p>

            </p>
            <p>
              If you have any questions feel free to contact us at kds@knowit.no
            </p>
            <p>
            We are still working dilingently on the program. Please note that the presentations and schedule are at the current time not set in stone and subject to changes.
            With that in mind, please take a look at our upcoming exciting <Link href="/TalksAndSpeakers">
               <a className="link">talks</a></Link> and temporary <Link href="/Schedule">
               <a className="link">schedule</a></Link> for the conference!
            </p>
          </div>
          <RegisterButton
            url="https://docs.google.com/forms/d/e/1FAIpQLSdrjECzitSMyHgff-daChQnXsfb3Ulph1uauXgt-STzi1xUdA/viewform"
            name="Participant Registration"
          ></RegisterButton>
        </div>
      </Layout>
    </div>
  );
};

export default participantRegistration;
