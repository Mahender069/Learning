import React from "react";

export default function Select({
  id,
  name,
  label,
  value,
  onChange,
  defaultItem,
  items,
  error,
}) {
  return (
    <div className="input-container">
      <label htmlFor={id}>{label}</label>
      <select name={name} value={value} onChange={onChange}>
        <option value="" hidden>
          {defaultItem}
        </option>
        {items.map((name, index) => {
          return (
            <option key={index} value={name}>
              {name}
            </option>
          );
        })}
      </select>
      <p className="error-message">{error}</p>
    </div>
  );
}
