export default function Card(props) {
    const {imageUrl}=props;
  return (
    <div>
        <img src={imageUrl}></img>
    </div>
  )
}
