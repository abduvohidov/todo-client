import React from "react";

interface IInput {
  placeholder: string;
  type?: string;
  value?: string;
  onClick?: () => void;
}

export const Input: React.FC<IInput> = (props) => {
  const { placeholder, type = "text", value, onClick } = props;
  return (
    <input
      type={type}
      className={"form-control w-25"}
      placeholder={placeholder}
      value={value}
      onClick={onClick}
    />
  );
};
