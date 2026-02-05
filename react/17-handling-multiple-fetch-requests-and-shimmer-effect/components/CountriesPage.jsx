
import SearchBar from "./SearchBar";
import SelectCountries from "./SelectCountries";
import CountriesList from "./CountriesList";
import { useState } from "react";

export default function CountriesPage() {
  const [query, setQuery] = useState("");
  return (
    <>
      <div className="search">
        <SearchBar setquery={setQuery} />
        <SelectCountries />
      </div>
      <main>
        <div className="countries-list">
          <CountriesList query={query} />
        </div>
      </main>
    </>
  );
}
