import { useState } from "react";
import Button from "./Components/Button";
import Counter from "./Components/Counter";
import Para from "./Components/Para";

export default function App() {
  const [count,setCount]=useState(0);
  return (
    <>
      <Counter countValue={count}>
      {
        {
          name:'Mahender',
          age:20
        }
      }
      </Counter>
      <Button
        clickHandler={() => {
          setCount(count+1);
        }}
      />
    </>
  );
}
