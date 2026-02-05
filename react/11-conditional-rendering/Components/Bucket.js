export default function Bucket(props) {
    const{count,number,isFull}=props;
  return (
    <>
        <h1>{count}</h1>
        <h1>Basket {number} {isFull ? 'full' : ''}</h1>
    </>
  )
}
