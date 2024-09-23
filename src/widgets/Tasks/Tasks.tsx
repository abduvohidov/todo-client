import axios from "axios";
import React, { useEffect, useState } from "react";
import { List } from "../../shared/ui/List/List";

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

export const Tasks: React.FC = () => {
  const base_url = "https://jsonplaceholder.typicode.com/users";
  const [data, setData] = useState<User[] | null>(null);

  async function getData() {
    const response = await axios.get(base_url);
    setData(response.data);
  }

  useEffect(() => {
    getData();
  }, []);

  function renderList() {
    if (data) {
      return data.map((item, indx) => {
        return <List key={indx} children={item.name} />;
      });
    }
  }

  return <ul className="list-group list-group-flush m-auto mt-4" style={{width: "32%"}}>{renderList()}</ul>;
};
