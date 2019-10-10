import Layout from "./components/Layout";
import RegisterButton from "./components/RegisterButton";

export default function AboutUs() {
  return (
    <div className="aboutUs page">
      <Layout background={true} header={<RegisterButton></RegisterButton>}>
        <div className="document">
          <h1>About us</h1>
          <p>More info will come at a later time</p>
        </div>
      </Layout>
    </div>
  );
}
