import React, { useRef } from "react";

export default function App() {
  const name = useRef(null);
  const password = useRef(null);
  console.log('app rendering')
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();

        console.log(name.current.value)
        console.log(password.current.value)
      }}
    >
      <label htmlFor="">Name</label>
      <input type="text" ref={name} onChange={(e)=> e.target.value}/>
      <label htmlFor="">Password</label>
      <input type="text" ref={password} />
      <button type="submit">submit</button>
    </form>
  );
}
