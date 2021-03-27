import "../theme/theme.css";

const Button = ({ text, onClick, classNm }) => {
  return (
    <button className={`btn mx-1 ${classNm}`} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
