import { Input } from "../../shared/ui/Input/Input";
import { Title } from "../../shared/ui/Title/Title";
import "./App.css";

export const App = () => {
  return (
    <section>
      <Title title={"Todo"} spanText={"demo"}/>
      <Input placeholder={"+ Add task"}/>
    </section>
  );
};
