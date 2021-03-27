import { useState } from "react";
import { Button } from "../Button";

const Count = ({ startNum }) => {
  const [counter, setCounter] = useState(startNum);
  const addOne = () => {
    setCounter(counter + 1);
  };
  const addFive = () => {
    setCounter(counter + 5);
  };
  const addHundred = () => {
    setCounter(counter + 100);
  };
  const substrHundred = () => {
    setCounter(counter - 100);
  };
  const substrFive = () => {
    setCounter(counter - 5);
  };
  const substrOne = () => {
    setCounter(counter - 1);
  };
  return (
    <div>
      <h2>{counter}</h2>
      <Button text="Add +1" classNm="btn-success" onClick={addOne} />
      <Button text="Add +5" classNm="btn-success" onClick={addFive} />
      <Button text="Add +100" classNm="btn-success" onClick={addHundred} />
      <Button text="Add -100" classNm="btn-danger" onClick={substrHundred} />
      <Button text="Add -5" classNm="btn-danger" onClick={substrFive} />
      <Button text="Add -1" classNm="btn-danger" onClick={substrOne} />
    </div>
  );
};

export default Count;
