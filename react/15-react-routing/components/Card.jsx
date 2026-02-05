import { Link } from "react-router";

export default function Card(props) {
  const { imageUrl, name, population, region } = props;
  console.log('card rendering');
  return (
    <Link className="card" to={`/country?name=${name}`} >
      <img src={imageUrl}></img>
      <p className="country-name">{name}</p>
      <p className="country-properties">Population:{population}</p>
      <p className="country-properties">Region:{region}</p>
    </Link>
  );
}
