import { Layout } from "../components";

const AboutUs = () => {
  return (
    <div className="aboutUs page">
      <Layout background={true}>
        <div className="document">
          <h1>About us</h1>
          <p>More info will come at a later time</p>

          
          <h1>History</h1>
          <p>
            The idea of holding a conference <i>“by developers, for developers”</i> arose sometime in August 2012 within Knowit Objectnet in Norway, 
            thanks to Fredrik Vraalsen, Alf Kristian Støyle, Tobias "tobiast" Torrissen and Jan Henrik Gundelsby). 
            It was important that the conference’s title make clear that the conference was by and for developers; thus, Knowit Developer. 
            </p><p> 
            The word "Summit" was added quite undramatically; its use may have been inspired by the "Colorado Software Summit". 
            The target group for the conference was the passionate system developers from Knowit, especially within the Java- and .NET-platforms. 
            The goal was that as many of the participants as possible would also be speakers—preferably all. With this arrangement, it also became clear that no external speakers would be invited.
          </p>
        </div>
      </Layout>
    </div>
  );
};



export default AboutUs;
