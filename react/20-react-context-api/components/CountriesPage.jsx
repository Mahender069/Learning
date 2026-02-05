
import SearchBar from "./SearchBar";
import SelectCountries from "./SelectCountries";
import CountriesList from "./CountriesList";
import { useContext, useState } from "react";
import {ThemeContext} from "../contexts/ThemeContext";

export default function CountriesPage() {
  const [query, setQuery] = useState("");
  const [isdark]=useContext(ThemeContext);
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
