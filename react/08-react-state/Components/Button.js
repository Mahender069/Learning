import './style.css'
export default function Button(props) {
  const { imgUrl, title, clickHandler } = props;
  return (
    <button title={title} onClick={clickHandler}>
      <img src={imgUrl} className='button'></img>
    </button>
  );
}
