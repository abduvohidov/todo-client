import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { User } from "./types";

export const App = () => {
  const [users, setUsers] = useState<User[] | null>(null);

  async function getUsers() {
    try {
      const response = await axios.get<User[]>("https://jsonplaceholder.typicode.com/users");
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  }

  useEffect(() => {
    getUsers();
  }, []);

  const showUsersList = (): JSX.Element[] | null => {
    return users && users.map((item) => (
      <li key={item.id}>
        {item.name}
      </li>
    ))
  };

  return (
    <section>
      <h1 className="title">
        Todo
        <span>demo</span>
      </h1>
      <div className="container">
        <ul>
          {showUsersList()}
        </ul>
      </div>
    </section>
  );
};
