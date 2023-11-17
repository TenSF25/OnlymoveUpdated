import Nav from "../../components/navbar/navbar";
import "./weatherStyles.css";
import "./iconStyles.css";
import Clear from "../Home/WeatherChange/Clear";
import Cloudy from "../Home/WeatherChange/Cloudy";
import Rainy from "../Home/WeatherChange/Rainy";
import Snowy from "../Home/WeatherChange/Snowy";
import { useEffect, useState } from "react";

const Home = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [time, setTime] = useState(Boolean);
  const [date, setDate] = useState("");
  const [code, setCode] = useState(Number);
  const [timeOfDay, setTimeOfDay] = useState("");

  const frases = [
    {
      autor: "Rabindranath Tagore",
      frase: "No puedes cruzar el océano simplemente mirando el agua.",
    },
    {
      autor: "Winston Churchill",
      frase: "El éxito es ir de fracaso en fracaso sin perder el entusiasmo.",
    },
  ];

  useEffect(() => {
    const apiKey = "cac6e78e6c694e4982a202002230707";
    fetch(
      `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=Villa Ballester`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setWeatherData(data);

        const date = data.location.localtime;

        const time = date.substr(11);
        setTime(time);

        const dateResponse = new Date(date);
        const options = {
          weekday: "long",
        };
        const formattedDate = dateResponse.toLocaleDateString("en-EU", options);
        const dateFormat =
          formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);

        setDate(dateFormat);

        let timeOfDay = "day";

        const code = data.current.condition.code;
        setCode(code);

        if (!data.current.is_day) {
          timeOfDay = "night";
        }

        setTimeOfDay(timeOfDay);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return "Loading...";

  return (
    <>
        {code == 1000 ? (
          <Clear
            weatherData={weatherData}
            time={time}
            date={date}
            timeOfDay={timeOfDay}
          />
        ) : code == 1003 ||
          code == 1006 ||
          code == 1009 ||
          code == 1030 ||
          code == 1069 ||
          code == 1087 ||
          code == 1135 ||
          code == 1273 ||
          code == 1276 ||
          code == 1279 ||
          code == 1282 ? (
          <Cloudy
            weatherData={weatherData}
            time={time}
            date={date}
            timeOfDay={timeOfDay}
          />
        ) : code == 1063 ||
          code == 1069 ||
          code == 1072 ||
          code == 1150 ||
          code == 1153 ||
          code == 1180 ||
          code == 1183 ||
          code == 1186 ||
          code == 1189 ||
          code == 1192 ||
          code == 1195 ||
          code == 1204 ||
          code == 1207 ||
          code == 1240 ||
          code == 1243 ||
          code == 1246 ||
          code == 1249 ||
          code == 1252 ? (
          <Rainy
            weatherData={weatherData}
            time={time}
            date={date}
            timeOfDay={timeOfDay}
          />
        ) : (
          <Snowy
            weatherData={weatherData}
            time={time}
            date={date}
            timeOfDay={timeOfDay}
          />
        )}
    </>
  );
};

export default Home;