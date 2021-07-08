import { Layout, Pin } from "../components";

import "../styling/locationStyles.scss";

const MazeMap = () => {
  return (
    <div className="mazemap page">
      <Layout>
        <div className="mazemap-container">
          <h1 className="title">Location</h1>
          <div className="location-name">
            <div>
              <Pin small={true} color="red"></Pin>
            </div>
            <p className="mazemap-name-text">
              Scandic Continental in Stockholm, Sweden.
            </p>
          </div>
          <div className="mazemap-name">
            <p className="mazemap-name-text">
              Knowit has its main offices directly north of the hotel.
            </p>
          </div>
          <iframe
            id="mazemap"
            src="https://www.use.mazemap.com/"
          />
        </div>
      </Layout>
    </div>
  );
};
export default MazeMap;