export const Button = ({ text, textColor, bgColor, handleClick }) => {
  return (
    <button
      className={`${bgColor} ${textColor} h-10 text-sm font-medium rounded-[12px] px-3.5`}
      onClick={handleClick}
    >
      {text}
    </button>
  );
};

Button.defaultProps = {
  textColor: "text-gray-50",
  bgColor: "bg-gray-800",
};

export default Button;
