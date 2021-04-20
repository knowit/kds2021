import { Layout } from "../components";

const CodeOfConduct = () => {
  return (
    <div className="codeOfConduct page">
      <Layout title="Code of conduct" background={true}>
        <div className="document coc">
          <h1 className="title">Conference Code of Conduct</h1>
          <p className="paragraph">
            All attendees, speakers and organisers at our conference are
            required to agree with the following code of conduct. Organisers
            will enforce this code throughout the event. We expect cooperation
            from all participants to help ensure a safe environment for
            everybody.
          </p>
          <h3 className="subtitle">Need help?</h3>
          <p className="paragraph">
            Contact anyone in the conference staff (look for staff badge) or use
            the slack channel.
          </p>
          <h3 className="subtitle">The Quick Version</h3>
          <p className="paragraph">
            Our conference is dedicated to providing a harassment-free
            conference experience for everyone, regardless of gender, gender
            identity and expression, age, sexual orientation, disability,
            physical appearance, body size, race, ethnicity, or religion (or
            lack thereof).
          </p>
          <p className="paragraph">
            We encourage inclusive language in conference talks. A good starting
            point towards inclusive language is to avoid default-gendered words
            like "guys"/"gals"/"him"/"her" when talking generally about a group
            of people. A tip is to try out words like "people"/"everyone" or
            "the team"/"the developers".
          </p>
          <p className="paragraph">
            We do not tolerate harassment of conference participants in any
            form. Sexual language and imagery is not appropriate for any
            conference venue, including talks, workshops, parties, Twitter and
            other online media. Conference participants violating these rules
            may be sanctioned or expelled from the conference without a refund
            at the discretion of the conference organisers.
          </p>

          <h3 className="subtitle">The Less Quick Version</h3>
          <p className="paragraph">
            Harassment includes offensive verbal comments related to gender,
            gender identity and expression, age, sexual orientation, disability,
            physical appearance, body size, race, ethnicity, religion,
            technology choices, sexual images in public spaces, deliberate
            intimidation, stalking, following, harassing photography or
            recording, sustained disruption of talks or other events,
            inappropriate physical contact, and unwelcome sexual attention.
          </p>
          <p className="paragraph">
            Participants asked to stop any harassing behavior are expected to
            comply immediately.
          </p>
          <p className="paragraph">
            If a participant engages in harassing behavior, the conference
            organisers may take any action they deem appropriate, including
            warning the offender or expulsion from the conference with no
            refund.
          </p>
          <p className="paragraph">
            If you are being harassed, notice that someone else is being
            harassed, or have any other concerns, please contact a member of
            conference staff immediately. Conference staff can be identified as
            they'll be wearing branded clothing and/or badges.
          </p>
          <p className="paragraph">
            Conference staff will be happy to help participants contact
            hotel/venue security or local law enforcement, provide escorts, or
            otherwise assist those experiencing harassment to feel safe for the
            duration of the conference. We value your attendance.
          </p>
          <p className="paragraph">
            We expect participants to follow these rules at conference and
            workshop venues and conference-related social events.
          </p>
        </div>
      </Layout>
    </div>
  );
};

export default CodeOfConduct;
