export default function Counter(props) {
  const { countValue,children } = props;
  console.log( children);
  return (
    <div>
      <p>The value is {countValue}</p>
    </div>
  );
}
