import "./App.css";
import "./Tailwind.css";
import React from "react";
import Input from "./components/input";
import List from "./components/list";
import { TaskProvider } from "./context/taskContent";

function App() {
  return (
    <body className="flex justify-center items-center h-screen">
      <div>
        <h1 className="text-4xl text-center">React + Typescript To Do App</h1>{" "}
        <TaskProvider>
          <Input />
          <List />
        </TaskProvider>
      </div>
    </body>
  );
}

export default App;
