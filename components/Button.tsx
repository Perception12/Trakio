import { MouseEventHandler } from "react";

const Button: React.FC<{
  handleClick: MouseEventHandler<HTMLButtonElement>;
  className?: string;
  children: React.ReactNode;
  outline?: boolean;
}> = ({ handleClick, className, children, outline }) => {
  return (
    <button
      onClick={handleClick}
      className={`btn btn-md ${
        className && className
      } ${
        outline ?
        "btn-outline border-primary bg-transparent text-primary": "bg-primary text-white "
      } hover:bg-secondary hover:text-white hover:border-secondary`}
    >
      {children}
    </button>
  );
};

export default Button;
