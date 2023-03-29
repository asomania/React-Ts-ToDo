import React, { useContext } from "react";

type TaskContent = {
  task: string;
  setTask: (task: string) => void;
  tasks: string[];
  setTasks: (tasks: string[]) => void;
  addTask: () => void;
};
type Props = {
  children: React.ReactNode;
};
const taskContent = React.createContext<TaskContent>({
  task: "",
  setTask: (task: string) => {},
  tasks: [],
  setTasks: (tasks: string[]) => {},
  addTask: () => {},
});

export const TaskProvider: React.FC<Props> = ({ children }) => {
  const [task, setTask] = React.useState("");
  const [tasks, setTasks] = React.useState<string[]>([]);
  const addTask = () => {
    setTasks([...tasks, task]);
  };
  return (
    <taskContent.Provider value={{ task, setTask, tasks, setTasks, addTask }}>
      {children}
    </taskContent.Provider>
  );
};

export const TaskContent = useContext(taskContent);
