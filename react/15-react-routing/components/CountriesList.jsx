import { useEffect, useState } from "react";
import Card from "./Card";
export default function CountriesList(props) {
  const { query } = props;
  const [data,setData]=useState([]);
  console.log('hii');

  useEffect(()=>{
    fetch('https://restcountries.com/v3.1/independent?status=true')
    .then(data => data.json())
    .then(data => setData(data))
  },[])
  return (
    <>
      {data
        .filter((country) => country.name.common.toLowerCase().includes(query))
        .map((country) => (
          <Card
            imageUrl={country.flags.png}
            name={country.name.common}
            population={country.population}
            region={country.region}
            key={country.name.common}
          />
        ))}
    </>
  );
}
