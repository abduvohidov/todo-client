import axios from "axios";
import React, { useEffect, useState } from "react";
import { List } from "../../shared/ui/List/List";

interface ITask {
  id: number;
  name: string;
}

interface ITasks {
  value?: string;
}
export const Tasks: React.FC<ITasks> = () => {
  const base_url = "http://localhost:3000/tasks";
  const [data, setData] = useState<ITask[] | null>(null);

  async function getData() {
    const response = await axios.get(base_url);
    setData(response.data);
  }

  useEffect(() => {
    getData();
  }, [data]);

  function renderList() {
    if (data) {
      return data.map((item, indx) => {
        return <List key={indx} children={item.name} />;
      });
    }
  }

  return (
    <ul
      className="list-group list-group-flush m-auto mt-4"
      style={{ width: "32%" }}
    >
      {renderList()}
    </ul>
  );
};
