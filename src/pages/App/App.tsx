import { SubmitForm } from "../../features/SubmitForm/SubmitForm";
import { Title } from "../../shared/ui/Title/Title";
import { Tasks } from "../../widgets/Tasks/Tasks";
import "./App.css";

export const App = () => {
  return (
    <section>
      <Title title={"Todo"} spanText={"demo"}/>
      <SubmitForm/>
      <Tasks/>
    </section>
  );
};
