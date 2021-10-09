import { Layout } from "../components";

const logo = () => {

  return (
    <div className="logo page">
      <Layout title="logo" background={true}>
        <div className= "document content">
        <div className="logoWrapper">
            <p>_logo in .png format</p>
            <img className='logoImage' src="/KDS_Logo_2021.png" />
            <p>_logo in .svg format</p>
            <img className='logoImage' src="/KDSsymbol.svg" />
            </div>
        </div>
      </Layout>
    </div>
  );
};
export default logo;
