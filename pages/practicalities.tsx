import { Layout } from "../components";

const Practicalities = () => {
  return (
    <div className="practicalities page">
      <Layout title="Practical information" background={true}>
        <div className="document content">
          <h1>Practical information</h1>
          <p>The registration is now open.</p>
          <p>
            Knowit Developer Summit will be held 12th - 13th of November 2021 in
            Stockholm.
          </p>
          <p>
            If you have questions during or before the conference, please feel
            free to contact us on Slack. We have created a slack-channel,{" "}
            <a
              className="paragraphLink"
              href="https://knowit.slack.com/archives/kds2021"
            >
              #kds2021
            </a>
            , for everything regarding the conference, join us and get the
            latest news! No account on slack? Then{" "}
            <a className="paragraphLink" href="https://knowit.slack.com/signup">
              sign up
            </a>{" "}
            first.
          </p>
          <p>
            <strong>More information to come...</strong>
          </p>
          {/*<p>
            <strong>Dinner.</strong> We will eat dinner in different groups on
            Friday. All who have said yes to dinner when they signed up should
            have gotten an email about when and where they are having dinner.
            After dinner we will gather at a local bar called Salong, where you
            can use your drink tickets.
          </p>
          <p>
            <strong>Name badges</strong> will be handed out in order to make it
            easier with names and companies.
          </p>
          <p>
            <strong>Hotel check inn</strong>. 15.00, though there might be some
            rooms ready before if you arrive early.
          </p>
          <p>
            <strong>Hotel check out</strong>. 12.00
          </p>
          <p>
            Please stay until the end on Saturday.{" "}
            <strong>All speakers deserve an audience.</strong>
          </p>
          <p>
            We have, once again, made a cool <strong>KDS t-shirt</strong>. Even
            though they´re awesome, there is only one per person. As such it
            would be great if you only took the size you ordered at signup.
          </p>
          <p>
            <strong>Share!</strong> Use hashtag <strong>#kds2020</strong> on
            twitter, blog on your company blogs and make this conference visible
            to everyone! There is lots of great content to be shared. But,
            please be careful not to share something that is marked as
            confidential or is customer related.
          </p>
          <p>
            We want everybody to have an awesome time. If something happens that
            you are not comfortable with, please tell us! For more information,
            check out our Code of Conduct{" "}
            <a className="paragraphLink" href="/codeOfConduct">
              here
            </a>{" "}
            .
          </p> */}
        </div>
      </Layout>
    </div>
  );
};

export default Practicalities;
