import { createRoot } from "react-dom/client";
import React from "react";

const root = createRoot(document.querySelector("#root"));

function Fun(props) {
  const { name, age,rollno } = props;
  return (
    <div>
      <h1>{name}</h1>
      <h1>{age}</h1>
      <h1>{rollno}</h1>
    </div>
  );
}
const container = (
  <div className="hello">
    <h1>hello world</h1>
  </div>
);

console.log(container);

// root.render({
//   $$typeof:Symbol.for('react.transitional.element'),
//   type:Fun,
//   ref:null,
//   props:{
//     name:'Mahender',
//     age:21
//   }
// });

// other syntax
// root.render(React.createElement(Fun, { name: "Mahender", age: 21 }));

//other syntax (recommded)
console.log(<Fun name="Mahender" age="23" />);
root.render(<Fun name="Mahender" age="23" rollno='23e51a66b1' />);
