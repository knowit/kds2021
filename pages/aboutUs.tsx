import { Layout } from "../components";

const AboutUs = () => {
  return (
    <div className="aboutUs page">
      <Layout background={true}>
        <div className="document">
          <h1>About</h1>
          <p>
            <strong>Knowit Developer Summit (KDS)</strong> is Knowit's internal software development 
            conference. The conference is put on by, and for, our passionate 
            developers at Knowit: we arrange it, we are its speakers, and we make 
            up its audience.
          </p>
          <p>
            <strong>The ambition for KDS</strong> is that it will be held annually and that its 
            location varies from year to year. The conference begins during Friday 
            around lunchtime and runs until Saturday afternoon. A conference dinner 
            is arranged on the Friday evening.
          </p>
          <p>
            <strong>Hotels and conference facilities</strong> are carefully selected. We strive to 
            ensure that accommodation is comfortable and that the conference is 
            located near a transportation hub such as an airport, train station or 
            bus terminal. The conference is always held in a city where Knowit 
            developers live and work, and one or more members of the committee 
            must live nearby.
          </p>
          <p>
            <strong>The conference committee</strong> consists of individuals from various Knowit 
            companies. There are no rules regarding who can join the committee; new 
            members are welcome to get involved!
          </p>
          <p>
            <strong>KDS is financed</strong> through cost price, and thus there is no profit target. 
            The cost is shared equally between all participants, regardless of 
            where you live, whether you are a speaker, audience member, or a 
            member of the committee. Travel to and from the conference is handled 
            by the participant.
          </p>
        </div>
      </Layout>
    </div>
  );
};

export default AboutUs;
