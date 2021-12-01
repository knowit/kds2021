import { Layout } from "../components";


const ThankYou = () => {
  return (
    <div className="thankYou page">
      <Layout title="Thank You" background={true}>
        <div className="document coc">
          <h1 className="title">Thank you!</h1>
          <p className="paragraph">
            KDS 2021 is done. A huge thanks to everyone for making this a fantastic conference!
            Stay tuned for announcements regarding the next KDS conference. Schedule and Talk information is still available for those seeking to relieve the memories.
          </p>
        </div>
      </Layout>
    </div>
  );
};

export default ThankYou;
