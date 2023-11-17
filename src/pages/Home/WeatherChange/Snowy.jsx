import "../weatherStyles.css";
import "../iconStyles.css";

const Cloudy = ({ weatherData, time, date, timeOfDay }) => {
  return (
    <>
      <div
        className="weather-container"
        style={{
          backgroundImage: `url(/src/assets/weather/${timeOfDay}/Snowy.jpg)`,
        }}
      >
        <div className="left">
          <div className="gradosIcon">
            <h1 className="grados">{weatherData.current.temp_c}°</h1>
            <div className="iconContainer">
              <div
                class="icon flurries"
              >
                <div class="cloud"></div>
                <div class="snow">
                  <div class="flake"></div>
                  <div class="flake"></div>
                </div>
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
