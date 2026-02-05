import { useEffect, useState } from "react";
import SkimmerPage from "./SkimmerPage";

export default function CountryDetails() {
  const urlObj = new URLSearchParams(window.location.search);
  const name = urlObj.get("name");
  const [countryData, setCountryData] = useState(null);
  console.log(name);
  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${name}`)
      .then((data) => data.json())
      .then(([data]) => {
        console.log(data);
        setCountryData({
          flag: data.flags.png,
          name: data.name.common,
          capital: data.capital,
          population: data.population,
          region: data.region,
        });
      });
  }, []);

  return (
    !countryData ? <SkimmerPage/> : (
      <>
        <div className="country-card">
            <img src={countryData.flag} className="country-detail-flag" />
            <h1 className="country-details">{countryData.name}</h1>
            <h1 className="country-details">{countryData.capital}</h1>
            <h1 className="country-details">{countryData.population}</h1>
            <h1 className="country-details">{countryData.region}</h1>
        </div>
     </>
    )
  );
}
