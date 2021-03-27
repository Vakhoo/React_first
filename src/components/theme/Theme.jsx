import { useState } from "react";
import { Button } from "../Button";
const Theme = ({ defaultColor }) => {
  const [color, setColor] = useState(defaultColor);

  const onRedColor = () => {
    setColor("red");
  };
  const onGreenColor = () => {
    setColor("green");
  };
  const onYellowColor = () => {
    setColor("yellow");
  };
  const onGrayColor = () => {
    setColor("gray");
  };
  const onBlackColor = () => {
    setColor("black");
  };
  const onBluekColor = () => {
    setColor("blue");
  };
  const onWhiteColor = () => {
    setColor("white");
  };

  return (
    <div>
      <Button text="red-theme" classNm="red my-1" onClick={onRedColor} />
      <Button text="green-theme" classNm="green my-1" onClick={onGreenColor} />
      <Button
        text="yellow-theme"
        classNm="yellow my-1"
        onClick={onYellowColor}
      />
      <Button text="gray-theme" classNm="gray my-1" onClick={onGrayColor} />
      <Button text="black-theme" classNm="black my-1" onClick={onBlackColor} />
      <Button text="blue-theme" classNm="blue my-1" onClick={onBluekColor} />
      <Button text="white-theme" classNm="white my-1" onClick={onWhiteColor} />
      <div
        style={{
          height: "300px",
          borderRadius: "5px",
        }}
        className={color}
      >
        <h1>ცარიელი div რამე ტექსტით</h1>
      </div>
    </div>
  );
};

export default Theme;
