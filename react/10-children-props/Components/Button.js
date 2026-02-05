export default function Button(props) {
  const { clickHandler } = props;
  return <button onClick={clickHandler}>Increment</button>;
}
