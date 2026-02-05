import { useContext, useEffect, useState } from "react";
import ShimmerCountryDetail from "./ShimmerCountryDetail";
import { Link, useLocation, useParams } from "react-router";
import backArrow from "url:../assets/images/back.png";
import {ThemeContext} from "../contexts/ThemeContext";

export default function CountryDetails() {
  const params = useParams();
  const name = params.country;
  const [countryData, setCountryData] = useState(null);
  const [notFound, useNotFound] = useState(false);
  const { state } = useLocation();

  const [isdark] = useContext(ThemeContext);
  console.log(state);

  useEffect(() => {
    if (state) {
      setCountryData({
        flag: state.flags.png,
        name: state.name.common,
        capital: state.capital,
        population: state.population,
        region: state.region,
        borders: [],
      });

      if (!state.borders) {
        state.borders = [];
      }

      Promise.all(
        state.borders.map((value) => {
          return fetch(`https://restcountries.com/v3.1/alpha/${value}`)
            .then((data) => data.json())
            .then(([value]) => {
              return value.name.common;
            });
        }),
      ).then((borders) => {
        console.log(borders);
        setCountryData((prevState) => ({ ...prevState, borders }));
      });

      return;
    }
    fetch(`https://restcountries.com/v3.1/name/${name}`)
      .then((data) => data.json())
      .then(([data]) => {
        setCountryData({
          flag: data.flags.png,
          name: data.name.common,
          capital: data.capital,
          population: data.population,
          region: data.region,
          borders: [],
        });

        if (!data.borders) {
          data.borders = [];
        }

        Promise.all(
          data.borders.map((value) => {
            return fetch(`https://restcountries.com/v3.1/alpha/${value}`)
              .then((data) => data.json())
              .then(([value]) => {
                return value.name.common;
              });
          }),
        ).then((borders) => {
          console.log(borders);
          setCountryData((prevState) => ({ ...prevState, borders }));
        });
      })
      .catch((err) => {
        console.log(err);
        useNotFound(true);
      });
  }, [name]);

  if (notFound) {
    return <div>Invalid country name or Offline</div>;
  }

  return countryData ? (
    <>
      <div className={`country-card ${isdark ? "dark" : ""}`}>
        <button
          onClick={() => {
            history.back();
          }}
          className="back-button"
        >
          <img src={backArrow} />
        </button>
        <img src={countryData.flag} className="country-detail-flag" />
        <h1 className="country-details">Name: {countryData.name}</h1>
        <h1 className="country-details">Capital: {countryData.capital}</h1>
        <h1 className="country-details">
          Population: {countryData.population}
        </h1>
        <h1 className="country-details">Region: {countryData.region}</h1>
        <div className="country-details">
          Borders:
          {countryData.borders.map((value, index) => {
            return (
              <Link to={`/${value}`} key={index} className="border-countries">
                {value}
              </Link>
            );
          })}
        </div>
      </div>
    </>
  ) : (
    <ShimmerCountryDetail />
  );
}
