import "../weatherStyles.css";
import "../iconStyles.css";

const Cloudy = ({ weatherData, time, date, timeOfDay }) => {
  return (
    <>
      <div
        className="weather-container"
        style={{
          backgroundImage: `url(/src/assets/weather/${timeOfDay}/cloudy.jpg)`,
        }}
      >
        <div className="left">
          <div className="gradosIcon">
            <h1 className="grados">{weatherData.current.temp_c}°</h1>
            <div className="iconContainer">
              <div
                class="icon cloudy"
              >
                <div class="cloud"></div>
                <div class="cloud"></div>
              </div>
            </div>
          </div>
          <h4 className="localidad">
            {weatherData.location.region}, {weatherData.location.name}
          </h4>
        </div>
        <div className="right">
          <h4 className="tiempo">
            {weatherData.current.condition.text}, {date}
          </h4>
        </div>
      </div>
    </>
  );
};

export default Cloudy;
