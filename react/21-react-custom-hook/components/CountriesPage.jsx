
import SearchBar from "./SearchBar";
import SelectCountries from "./SelectCountries";
import CountriesList from "./CountriesList";
import {useState } from "react";
import { useTheme } from "../hooks/useTheme";

export default function CountriesPage() {
  const [query, setQuery] = useState("");
  const [isdark]=useTheme();
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
