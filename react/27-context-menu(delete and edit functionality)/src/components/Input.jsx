export default function Input({ id, name, value, onChange, error }) {
  return (
    <>
      <div className="input-container">
        <label htmlFor={id}>{id}</label>
        <input id={id} name={name} value={value} onChange={onChange} />
      </div>
      <p className="error-message">{error}</p>
    </>
  );
}
