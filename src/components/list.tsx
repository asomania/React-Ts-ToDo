import React from "react";
import { UseTaskContent } from "../context/taskContent";

const list: React.FC = () => {
  const { tasks } = UseTaskContent();
  return (
    <div>
      {tasks.map((task) => {
        return (
          <ul>
            <li className="bg-slate-200 mt-2 rounded p-2">{task}</li>
          </ul>
        );
      })}
    </div>
  );
};

export default list;
