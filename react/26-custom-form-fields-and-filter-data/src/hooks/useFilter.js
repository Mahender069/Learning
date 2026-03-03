import { useState } from "react";

export function useFilter(data, callback) {
  const [query, setQuery] = useState("");
  const filteredData = data.filter(
    (ele) => {
      return ele.category === query || query === ""
    }
  );
  return [filteredData, setQuery];
}
