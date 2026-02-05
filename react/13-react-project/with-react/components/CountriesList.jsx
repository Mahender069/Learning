import data from "../data";
import Card from "./Card";
export default function CountriesList(props) {
  const { query } = props;
  console.log('country list rendering');
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
