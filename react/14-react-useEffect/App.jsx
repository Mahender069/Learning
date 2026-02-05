import { useEffect, useState } from "react";
import Card from "./components/Card";

export default function App() {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((res) => {
        setData(res.products);
        console.log("rendering app.jsx");
      });
  }, []);

  useEffect(()=>{
    console.log('Number Changed Bro!!');
  },[count])

  console.log('first');

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={()=>{
        setCount(count + 1)
      }}>Click Me!!!</button>
      {data.map((product) => {
        return <Card imageUrl={product.images[0]} key={product.id} />;
      })}
    </div>
  );
}
