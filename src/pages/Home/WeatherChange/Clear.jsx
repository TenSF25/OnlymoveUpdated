import "../weatherStyles.css";
import "../iconStyles.css";

const Cloudy = ({ weatherData, time, date, timeOfDay }) => {
  return (
    <>
      <div
        className="weather-container"
        style={{
          backgroundImage: `url(/src/assets/weather/${timeOfDay}/clear.jpg)`,
        }}
      >
        <div className="left">
          <div className="gradosIcon">
            <h1 className="grados">{weatherData.current.temp_c}°</h1>
            <div className="iconContainer">
              <div
                class="icon sunny"
              >
                <div class="sun">
                  <div class="rays"></div>
                </div>
              </div>
            </div>
          </div>
          <h4 className="localidad">
            {weatherData.location.region}, {weatherData.location.name}
          </h4>
        </div>
        <div className="right">
          <h4 className="hora">{time && (
            parseInt(time) >= 12 ? (
              <span>{time} PM</span>
            ) : (
              <span>{time} AM</span>
            )
          )}</h4>
          <h4 className="tiempo">
            {weatherData.current.condition.text}, {date}
          </h4>
        </div>
      </div>
    </>
  );
};

export default Cloudy;
