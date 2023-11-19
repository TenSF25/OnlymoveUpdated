import Nav from "../../components/navbar/navbar";
import Weather from "./weatherApp";

import "./homeStyles.css";

const Home = () => {
  return (
    <>
      <div className="weather">
        <Weather />
      </div>
    </>
  );
};

export default Home;
