export default function Select({
  id,
  name,
  value,
  onChange,
  defaultValue,
  error,
  options,
}) {
  return (
    <div className="input-container">
      <label htmlFor={id}>Category</label>
      <select id={id} name={name} value={value} onChange={onChange}>
        <option value="" hidden>
          {defaultValue}
        </option>
        {options.map((value,index) => {
          return <option key={index} value={value}>{value}</option>;
        })}
      </select>
      <p className="error-message">{error}</p>
    </div>
  );
}
