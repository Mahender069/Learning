export default function Bucket(props){
    const {count,number}=props;
    return (
        <div>
            <h1>{count} apples</h1>
            <h1>basket {number}</h1>
        </div>
    )
}