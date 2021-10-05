import { Layout } from "../components";
import "../styling/globalStyles.scss";

const Logo = () => {

  return (
    <div className="logo page">
      <Layout title="Logo" background={true}>
        <div className= "document content">
        <div className="logoWrapper">
            <p>Logo in .png format</p>
            <img className='logoImage' src="../static/KDS_Logo_2021.png" />
            <p>Logo in .svg format</p>
            <img className='logoImage' src="../static/KDSsymbol.svg" />
            </div>
        </div>
      </Layout>
    </div>
  );
};
export default Logo;
