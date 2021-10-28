import { Layout } from "../components";

const ConventionMap = () => {

  return (
    <div className="logo page">
      <Layout title="ConventionMap" background={true}>
        <div className= "document content">
            <div className="conventionMapContainer">
                <h1>Convention Map</h1>
                <p>Map over convention area. Presentation rooms are numbered 15-20 and are located on the sixth floor of the hotel. Room 14 are for storage purposes. Toilets are located in the red squiggly line, while strong red borders denote emergency exits.</p>
                <img className='conventionMap' src="/scandicMap.jpg" />
            </div>
        </div>
      </Layout>
    </div>
  );
};
export default ConventionMap;
