const Country = ({ country, handleVisitedCountry, handleVisitedFlags }) => {
  const { name, flags, population, area, cca3 } = country;
  const [visited, setVisited] = useState(false);
  const handleVisited = () => {
    setVisited(!visited);
  };
  console.log(handleVisitedCountry);
  return (
    <div className={`country ${visited ? "visited" : "blue"}`}>
      <h3 style={{ color: visited ? "skyblue" : "yellow" }}>
        Name: {name?.common}
      </h3>
      <img src={flags.png} alt="" />
      <h3>Population: {population}</h3>
      <h3>Area: {area}</h3>
      <h3>
        <small>Code: {cca3}</small>
      </h3>
      <button onClick={() => handleVisitedCountry(country)}>
        Mark Visited
      </button>
      <br /> <br />
      <button onClick={() => handleVisitedFlags(country.flags.png)}>
        Add Flag
      </button>
      <br /> <br />
      <button onClick={handleVisited}>
        {visited ? "Visited" : "non-visited"}
      </button>{" "}
      <br /> <br />
      {visited ? "I have visited this country" : "I want to visit"}
      <hr />
      <CountryDetail
        country={country}
        handleVisitedCountry={handleVisitedCountry}
        handleVisitedFlags={handleVisitedFlags}
      ></CountryDetail>
    </div>
  );
};

import { useState } from "react";
import "./Country.css";
import CountryDetail from "../CountryDetail/CountryDetail";
export default Country;
