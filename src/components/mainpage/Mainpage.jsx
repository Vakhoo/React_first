import { Count } from "../count";
import { Greeting } from "../greeting";
import { Theme } from "../theme";

const Mainpage = (props) => {
  return (
    <div>
      <Greeting greeting="Hello" description="React Home-work" />
      <Count startNum={25} />
      <Theme defaultColor="yellow" />
    </div>
  );
};

export default Mainpage;
