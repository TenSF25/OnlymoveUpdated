import "./statsStyles.css";
import humidity from "../../../assets/stats/humidity.png";
import wind from "../../../assets/stats/wind.svg";
import sunny from "../../../assets/stats/sunny.png";
import cloud from "../../../assets/stats/cloud.svg";

const Stats = ({ weatherData }) => {
  return (
    <>
      {weatherData && (
        <div className="statsContainer">
        <div className="leftStats">
          <div className="humidity">
            <img src={humidity} alt="" className="humidityImg"/>
            <div className="contentStats">
              <h5>Humidity</h5>
              <h6>{weatherData.current.humidity}%</h6>
            </div>
          </div>
          <div className="uv">
            <img src={sunny} alt="" className="sunnyImg"/>
            <div className="contentStats">
              <h5>Uv Index</h5>
              <h6>{weatherData.current.uv} out of 10</h6>
            </div>
          </div>
        </div>
        <div className="line-vertic"/>
        <div className="rightStats">
          <div className="wind">
            <img src={wind} alt="" className="windImg"/>
            <div className="contentStats">
              <h5>Wind</h5>
              <h6>{weatherData.current.wind_kph}km/h</h6>
            </div>
          </div>
          <div className="clouds">
            <img src={cloud} alt="" className="cloudImg"/>
            <div className="contentStats">
              <h5>Clouds</h5>
              <h6>{weatherData.current.cloud}%</h6>
            </div>
          </div>
        </div>
      </div>
      )}
    </>
  );
};

export default Stats