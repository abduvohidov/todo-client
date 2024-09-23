import React from "react";
import { Input } from "../../shared/ui/Input/Input";
import { Button } from "../../shared/ui/Button/Button";

export const SubmitForm: React.FC = () => {
  return (
    <div className={"d-flex align-items-center justify-content-center mt-4"}>
      <Input placeholder={"Добавить задачу..."} />
      <Button type={"submit"} children={"Добавить"} />
    </div>
  );
};
