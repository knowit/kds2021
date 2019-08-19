import Layout from "./components/Layout";
import "../styling/locationStyles.scss";
export default function Location() {
  return (
    <div className="location">
      <Layout>
        <a
          id="location-link"
          href="https://www.stockholmwaterfront.com/find-us/?lang=svskapa%20ett%20ljusspel%20bakom%20takets%20fula%20uppstaende%20aluminiumstaket."
        >
          Stockholm Waterfront Hotel
      </a>
        <Map />
      </Layout>
    </div>
  );
}

const Map = () => {
  return (
    <div>
      <iframe
        id="map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2035.1707535769806!2d18.053726516659214!3d59.33010298165915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f9d604f482201%3A0x858ff8c54ed4011b!2sRadisson+Blu+Waterfront+Hotel+Stockholm!5e0!3m2!1sno!2sno!4v1563453424921!5m2!1sno!2sno"
      />
    </div>
  );
};
