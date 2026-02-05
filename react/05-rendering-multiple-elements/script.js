import { createRoot } from "react-dom/client";

import "./style.css";

const root = createRoot(document.querySelector("#root"));

function get_card(key, str1, img_url, price) {
  return (
    <div key={key} className="card">
      <h1>{str1}</h1>
      <img src={img_url}></img>
      <h1>${price}</h1>
    </div>
  );
}
fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then((res) =>{
    // const result=[];
    // res.products.forEach((value,index) => {
    //     result.push(get_card(index,value.title,value.images[0],value.price))
    // })
    // console.lo(result);
    // root.render(<div className="container">{result}</div>)

    console.log(res);
    //optimal approach using map
    root.render(
      <div className="container">
        {res.products.map((products) => {
          return get_card(
            products.id,
            products.title,
            products.thumbnail,
            products.price
          );
        })
        }
      </div>
    );
  })
  .catch((err)=>{
    
    console.log(err);
  })
  
