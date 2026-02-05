
import SearchBar from "./SearchBar";
import SelectCountries from "./SelectCountries";
import CountriesList from "./CountriesList";
import { useState } from "react";
import { useOutletContext } from "react-router";

export default function CountriesPage() {
  const [query, setQuery] = useState("");
  const [isdark]=useOutletContext();
  return (
    <>
      <div className={`search ${isdark?'dark':''}`}>
        <SearchBar setquery={setQuery} />
        <SelectCountries />
      </div>
      <main className={isdark?'dark':''}>
        <div className="countries-list">
          <CountriesList query={query} />
        </div>
      </main>
    </>
  );
}
