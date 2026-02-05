import React from "react";

export default function SelectCountries() {
  console.log('select rendering');
  return (
    <>
      <select name="countries" id="country-filter">
        <option value="india">India</option>
      </select>
    </>
  );
}
