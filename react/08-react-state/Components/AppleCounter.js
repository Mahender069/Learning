import Bucket from "./Bucket";
import Button from "./Button";
import LeftArrow from "url:../assets/images/leftarrow.png";
import RightArrow from "url:../assets/images/rightarrow.png";
import "./style.css";
import { useState } from "react";

export default function AppleCounter() {
  const totalApples = 10;
  const [right, setRight] = useState(0);

  const leftClickHandler = () => {
    if (right > 0) {
      console.log("left");
      setRight(right - 1);
    }
  };
  const rightClickHandler = () => {
    if (right < 10) {
      console.log("right");
      setRight(right + 1);
    }
  };
  return (
    <div className="container">
      <Bucket count={totalApples - right} number="1" />
      <Button
        title="leftarrow"
        imgUrl={LeftArrow}
        clickHandler={leftClickHandler}
      />
      <Button
        title="rightarrow"
        imgUrl={RightArrow}
        clickHandler={rightClickHandler}
      />
      <Bucket count={right} number="2" />
    </div>
  );
}
