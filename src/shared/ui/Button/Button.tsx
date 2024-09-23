import React from "react";

interface IButton {
  type: "submit" | "reset" | "button" | undefined;
  children: string;
}

export const Button: React.FC<IButton> = (props) => {
  const { children, type } = props;
  return (
    <button type={type} className={"btn btn-primary"}>
      {children}
    </button>
  );
};
