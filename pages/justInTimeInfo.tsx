import { Layout } from "../components";
import Link from "next/link";

const justInTimeInfo = () => {
  return (
    <div className="justInTimeInfo page">
      <Layout title="Just In Time Info" background={true}>
        <div className="document content">
          <h1>Just In Time Info</h1>
          <p>
            KDS is getting closer and here is some info to make the conference a smooth experience. 
          </p>
          <p>
            We have a Code of Conduct that applies to the conference, as we want all 
            to have a great time. Check it out
            <Link href="https://kds.knowit.no/CodeOfConduct">
              <a className="paragraphLink"> here</a>
              </Link>. If you are not having a great time, give a heads up to one 
              of the committee members.
          </p>
          <p>
            The program is published 
            <Link href="https://kds.knowit.no/Schedule">
              <a className="paragraphLink"> here</a>
            </Link>. 
            You should start thinking about what to attend! We will be updating the 
            conference website with any changes before and during the conference. 
            You can mark the sessions you plan to attend by clicking the heart, 
            as a reminder for yourself. 
            </p>
          <p>
            If needed, don’t forget to make your own travel arrangements in time!
          </p>
          <p>
            The conference is held at 
            <Link href="https://www.scandichotels.com/hotels/sweden/stockholm/scandic-continental">
              <a className="paragraphLink"> Scandic Continental Hotel </a>
            </Link>
            For those travelling to Stockholm by air, we recommend that you take either the
            <Link href="https://www.arlandaexpress.com/">
              <a className="paragraphLink"> Arlanda Express </a>
              </Link>
            to 
            <Link href="https://www.dinstation.com/stockholm-centralstation/">
              <a className="paragraphLink"> Stockholm Centralstation </a>
            </Link>
            or
            <Link href="https://www.flygbussarna.se/en/arlanda">
              <a className="paragraphLink"> airport bus </a>
              </Link>
              to 
            <Link href="http://www.cityterminalen.com/en/">
              <a className="paragraphLink"> Cityterminalen </a>
            </Link>
            . If you come by train or Arlanda Express, you will see the hotel from 
            Centralstation. From the Cityterminal it is a few hundred meters to walk.
          </p>
          <p>
            The conference starts at 11:00 with a short info session/meet-and-greet in 
            room 17 + 18.
          </p>
          <p>
            Lunch on both days is served in the lobby outside the conference rooms. 
            Lunch is served between 11:30 and 12:30 on Friday and between 12:10 and 
            13:40 on Saturday.
          </p>
          <p>
            Friday at 12:30 the parallel sessions will start and continue until 17:15 
            when we will have a short break before Open Space sessions at 17:30.
          </p>
          <p>
            The conference dinner is at 20:00, and for some 20:30. The dinner is included 
            in the conference fee. As we did when the conference was in Bergen and Oslo, 
            you have all been assigned to a restaurant. You will receive an email about 
            which restaurant you have been assigned to before the conference starts. It 
            is different distances to the restaurants, but it does not take more than 
            20 minutes to walk. There will be one person in each group who is from the 
            Stockholm office and who can answer questions.
          </p>
          <p>
            Hotel rooms:
          </p>
          <ul>
            <li>
              Please make sure that the hotel reservation is in accordance with your 
              wishes. A separate mail, titled “Knowit Developer Summit 2021 - Hotel 
              accommodation”, has been sent on this 2021-11-01. PLEASE check this, 
              as we want to be 100% sure that everyone that has asked for a room also 
              has one.
            </li>
            <li>
              You will be able to pick up your room key, for check inn, sometime after 15:00 on Friday.
            </li>
            <li>
              Check-out must be done before 12:00 on Saturday.
            </li>
            <li>
              If you have extended your stay at the hotel, beyond the included accommodation 
              from Friday to Saturday, you have to make sure the hotel gets the information 
              they need, e.g. name of guests. You have to pay for any additional nights and/or 
              people when you check out. This also applies if you have taken something from the 
              hotel room's minibar or set up bills on the room number. 
            </li> 
            <li>
              If you have questions about your room, or anything else about the hotel, please 
              contact us at 
              <Link href="mailto:kds@knowit.no">
                <a className="paragraphLink"> kds@knowit.no </a>
              </Link> slack us in  
              <Link href="https://knowit.slack.com/archives/kds2021">
                <a className="paragraphLink"> #kds2021</a>
              </Link>. 
            </li>
          </ul>
          <p>
            All speakers should have received an email with practical information (sent on the 28th 
            of October with the subject “Knowit Developer Summit 2021 - Speaker information”). If you 
            haven’t, please let us know as soon as possible. 
          </p>
          <p>
            Remember to pick up this year’s t-shirt, there should be one in your size, as specified 
            in the signup form. Even though they're really cool there's only one per person. The same 
            applies to our new KDS coffee mugs - only one per person.
          </p>
          <p>
            Share! We have created a slack channel, 
            <Link href="https://knowit.slack.com/archives/kds2021">
              <a className="paragraphLink"> #kds2021</a>
            </Link> , for everything regarding the conference, 
            join us and get the latest news! No account on slack? Then sign up first. Use hashtag #kds2021 
            on Twitter, Facebook, Instagram, Yammer, blogs and make this conference visible to everyone! 
            We have lots of great content to be shared. But please be careful not to share something that 
            is marked as confidential or is customer related.
          </p>
          <p>
            We advise everyone to be responsible with regard to theirs and others health. If you are unable to 
            be vaccinated, then please ensure you have been tested for COVID-19 infection and are able to make 
            an informed decision about participation. If you are feeling unwell, we advise you not to participate.
          </p>
          <p>
            Last but not least. This is our conference together. You influence it by being a speaker, a member 
            of the committee, a volunteer, participant or perhaps a photographer. Keep in mind that this may 
            be the first time your colleague is a speaker. Help him/her with any technical difficulties and 
            support as an audience. Isn't the food good? Would you like to have something else for the future KDS? 
            Join the committee and be part of the change! Everything is possible. We will also send out a feedback 
            form after the conference where you get a chance to influence the next conference.
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

export default justInTimeInfo;
