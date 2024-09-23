import React from "react";

interface IUpdateControlButton {
  onClick?: () => void;
  className?: string;
}

export const UpdateControlButton: React.FC<IUpdateControlButton> = (props) => {
  const { onClick, className } = props;
  return (
    <button className={`btn btn-light py-0 px-1 ${className}`} onClick={onClick}>
      update
    </button>
  );
};
