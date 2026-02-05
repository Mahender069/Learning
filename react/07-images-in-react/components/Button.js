export default function Arrow(props) {
  const { url, title, clickHandler } = props;
  return (
    <button title={title} onClick={clickHandler}>
      <img className="arrow" src={url}></img>
    </button>
  );
}
