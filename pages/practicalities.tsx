import { Layout } from "../components";
import "../styling/callForPresentationsStyles.scss";
import Link from "next/link";
const Practicalities = () => {
  return (
    <div className="practicalities page">
      <Layout title="Practical information" background={true}>
        <div className="document content">
          <h1>Practical information</h1>
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
            <strong>COVID-19 and vaccines.</strong> Regarding the ongoing pandemic, 
            we will continue to monitor the situation as it develops, and we will 
            update our event policy accordingly. As the conference will be held in 
            Stockholm, we will follow Sweden’s national guidelines in addition to 
            Knowit’s internal COVID-19 guidelines. We will also take the situation 
            in participants’ home countries into consideration. In the event that 
            the vaccine rollout is delayed or if new variants of COVID-19 spread 
            across countries, we might be forced to postpone the event. 
          </p>
          <p>
            <strong>Solidarity.</strong> As in previous years, we embrace 
            solidarity at Knowit, which means that we all pay the same amount 
            for the conference, regardless of whether we are a speaker or not, 
            where we live, or whether we might need a hotel room. This also 
            applies if you are interested in just holding a presentation and 
            not attending the rest of the conference. Our ambition is that 
            everyone attends the entire conference to meet and learn from 
            fellow colleagues at other Knowit companies.
          </p>
          <p>
            <strong>Great opportunity.</strong> We believe that this conference 
            is a great opportunity to get better acquainted with others engaged 
            in system development at Knowit. We think it’s important to participate 
            in these kinds of events in order to create a good climate for cooperation 
            across the company, in addition to the great program. 
          </p>
          <p>
            <strong>Payment.</strong> The fee for the conference 
            will be 3900 SEK, excluding VAT. In addition to the 
            conference, this includes lunch and dinner on Friday, and lunch on 
            Saturday. For those travelling to Stockholm, an overnight stay in a 
            shared double room and breakfast at the hotel on Saturday is also 
            included. If you prefer, you can pay 600 SEK extra to get a single 
            room. Travel costs for those who need to travel to Stockholm are not 
            included.
          </p>
          <p>
            <strong>Location.</strong> We have booked the 
            <Link href="https://www.scandichotels.com/hotels/sweden/stockholm/scandic-continental">
              <a className="paragraphLink"> Scandic Continental Hotel </a>
              </Link> 
            for accommodation and as our conference venue. It is located 
            in the city center and is very easy to get to either by 
            <Link href="https://www.flygbussarna.se/en/arlanda">
              <a className="paragraphLink"> bus </a>
              </Link>
            or 
            <Link href="https://www.arlandaexpress.com/">
              <a className="paragraphLink"> Arlanda Express </a>
              </Link>
            from the 
            <Link href="https://www.swedavia.com/arlanda/">
              <a className="paragraphLink"> airport</a>
              </Link>
            . The 
            <Link href="https://www.dinstation.com/stockholm-centralstation/">
              <a className="paragraphLink"> train station </a>
              </Link>
            is also close by; we encourage taking an environmental approach to travelling!
            You can view the location of the venue 
            <Link href="/Location">
            <a className="paragraphLink"> here</a>
          </Link>.
          </p>
          <p>
            <strong>If you have questions or suggestions, send an email to 
            <Link href="mailto:kds@knowit.no">
            <a className="paragraphLink"> kds@knowit.no </a>
          </Link>.</strong>
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
