import React from "react";

type ButtonType = "primary" | "secondary" | "danger";

interface ButtonProps {
  type?: ButtonType;
  children: React.ReactNode;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ type = "primary", children, onClick }) => {
  const baseStyles = "px-4 py-2 rounded text-white font-medium text-xs transition duration-150 ease-in-out cursor-pointer";
  
  const typeStyles: Record<ButtonType, string> = {
    primary: "bg-neutral-900 text-white hover:bg-neutral-800 border border-neutral-950 ",
    secondary: "bg-neutral-800 text-white hover:bg-neutral-700",
    danger: "bg-red-500 text-white hover:bg-red-600 ", 
  };

  return (
    <button className={`${baseStyles} ${typeStyles[type]}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
