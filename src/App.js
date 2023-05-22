import React from "react";
import "./App.css";
import { Index } from "./pages";
import { TaskProvider } from "./contexts/TaskContext";


function App() {

  return (
    <TaskProvider>
      <Index/>
    </TaskProvider>
  );
}

export default App;
