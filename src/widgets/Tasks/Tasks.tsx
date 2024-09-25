import axios from "axios";
import React, { useEffect, useState } from "react";
import { List } from "../../shared/ui/List/List";
import { toast } from "react-toastify";
import { Modal } from "../../shared/ui/Modal/Modal";

interface ITask {
  id: number;
  name: string;
}

interface ITasks {
  value?: string;
}
export const Tasks: React.FC<ITasks> = () => {
  const notifySuccess = () => toast.success("Задача успешно удалено!");
  const base_url = "http://localhost:3000/tasks";
  const [data, setData] = useState<ITask[] | null>(null);
  const [taskId, setTaskId] = useState<string>("");
  const [taskValue, setTaskValue] = useState<string>("");

  async function getData() {
    const response = await axios.get(base_url);
    setData(response.data);
  }

  useEffect(() => {
    getData();
  }, [data]);

  async function deleteData(id: string) {
    const base_url = "http://localhost:3000/tasks";
    await axios.delete(base_url + `/${id}`);
    notifySuccess();
  }

  function renderList() {
    if (data) {
      return data.map((item, indx) => {
        return (
          <>
            <List
              key={indx}
              children={item.name}
              onClickRemove={() => deleteData(item.id.toString())}
              onClickUpdate={() => {
                setTaskId(item.id.toString());
                setTaskValue(item.name.toString());
              }}
              toggleModal="modal"
              targetModal="#exampleModal"
            />
          </>
        );
      });
    }
  }

  return (
    <ul
      className="list-group list-group-flush m-auto mt-4"
      style={{ width: "32%" }}
    >
      {renderList()}
      <Modal id={taskId} taskValue={taskValue} />
    </ul>
  );
};
