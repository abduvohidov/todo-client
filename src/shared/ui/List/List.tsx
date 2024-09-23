import React from "react";
import { UpdateControlButton } from "../../../features/UpdateControlButton/UpdateControlButton";
import { RemoveControlButton } from "../../../features/RemoveControlButton/UpdateControlButton";

interface IList {
  children: string;
}

export const List: React.FC<IList> = (props) => {
  const { children } = props;

  return (
    <li
      className={
        "list-group-item d-flex align-items-center justify-content-between"
      }
    >
      <p>{children}</p>
      <div className="GroupButtons">
        <UpdateControlButton className={"me-2"} />
        <RemoveControlButton />
      </div>
    </li>
  );
};
