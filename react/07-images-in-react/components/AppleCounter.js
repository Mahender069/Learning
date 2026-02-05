import Bucket from "./Bucket";
import Button from "./Button";
import "../style.css";

import LeftArrow from "url:../assets/images/leftarrow.png";
import RightArrow from "url:../assets/images/righarrow.png";

const total=10;
let right=0,left=total-right;
export default function AppCounter() {
  return (
    <div className="container">
      <Bucket count={left} number="1" />
      <Button
        url={LeftArrow}
        title="left-arrow"
        clickHandler={() => {
          console.log('left button');
        }}
      />
      <Button
        url={RightArrow}
        title="right-arrow"
        clickHandler={() => {
          console.log('right button');
        }}
      />
      <Bucket count={right} number="2" />
    </div>
  );
}
