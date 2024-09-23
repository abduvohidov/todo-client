import { useState } from "react";
import { SubmitForm } from "../../features/SubmitForm/SubmitForm";
import { Title } from "../../shared/ui/Title/Title";
import { Tasks } from "../../widgets/Tasks/Tasks";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

export const Application = () => {
  const notifyError = () => toast.error("Введите название задачи!");
  const notifySuccess = () => toast.success("Задача успешно добавлена!");
  const [value, setValue] = useState<string>("");
  const base_url = "http://localhost:3000/tasks";

  async function postData(value: string) {
    const postData = {
      id: Math.floor(Math.random() * 10000000000),
      name: value,
    };

    if (value.length) {
      axios.post(base_url, postData);
      notifySuccess();
      setValue("");
    } else {
      notifyError();
    }
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key == "Enter") {
      postData(value);
    }
  }

  return (
    <section>
      <Title title={"Todo"} spanText={"demo"} />
      <SubmitForm
        onClick={() => postData(value)}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={() => handleKeyDown}
        value={value}
      />
      <Tasks />
      <ToastContainer autoClose={1000} />
    </section>
  );
};
