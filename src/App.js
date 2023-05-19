import "./App.css";
import { TaskCreator } from "./components/TaskCreator";
import { TaskFilter } from "./components/TaskFilter";
import { TaskHeader } from "./components/TaskHeader";
import { TaskItem } from "./components/TaskItem";
import { TaskList } from "./components/TaskList";

function App() {
  return (
    <>
      <TaskHeader />
      <TaskFilter />
      <TaskList>
        <TaskItem text={"Make bed "} />
        <TaskItem text={"Make breakfast "} />
        <TaskItem text={"Take a shower "} />
      </TaskList>
      <TaskCreator />
    </>
  );
}

export default App;
