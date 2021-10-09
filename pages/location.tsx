import { Layout, Pin } from "../components";

const location = () => {
  return (
    <div className="location page">
      <Layout>
        <div className="map-container">
          <h1 className="title">Location</h1>
          <div className="location-name">
            <div>
              <Pin small={true} color="red"></Pin>
            </div>
            <p className="location-name-text">
              Scandic Continental in Stockholm, Sweden.
            </p>
          </div>
          <div className="location-name">
            <p className="location-name-text">
              Knowit has its main offices directly north of the hotel.
            </p>
          </div>
          <iframe
            id="map"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d8140.445489541563!2d18.0595668!3d59.3310944!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xdec7d747ae5962d4!2sHotel%20Continental!5e0!3m2!1sno!2sno!4v1614064915940!5m2!1sno!2sno"
          />
        </div>
      </Layout>
    </div>
  );
};
export default location;
