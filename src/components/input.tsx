import React from "react";

const input = () => {
  return (
    <div className="flex justify-center gap-3">
      <input type="text" className="border flex justify-center" />
      <button className="border bg-sky-500  p-2 rounded">Add</button>
    </div>
  );
};

export default input;
