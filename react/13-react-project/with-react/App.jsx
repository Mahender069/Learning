import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import SelectCountries from "./components/SelectCountries";
import CountriesList from "./components/CountriesList";

import "./App.css";
import { useState } from "react";

export default function App() {
  const [query, setQuery] = useState('');
  console.log('rendering app component');
  return (
    <>
      <Header />
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
