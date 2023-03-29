import React from "react";
import { UseTaskContent } from "../context/taskContent";

const input: React.FC = () => {
  const { task, setTask, addTask } = UseTaskContent();

  return (
    <div className="flex justify-center gap-3">
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        className="border flex justify-center"
      />
      <button className="border bg-sky-500  p-1 rounded" onClick={addTask}>
        Ekle
      </button>
    </div>
  );
};

export default input;
