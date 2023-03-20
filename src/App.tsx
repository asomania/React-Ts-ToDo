import "./App.css";
import "./Tailwind.css";
import React from "react";
import Input from "./components/input";
import List from "./components/list";

function App() {
  const [count, setCount] = React.useState<string>("");
  const [list, setList] = React.useState<string[]>([]);

  const addToList = () => {
    setList([...list, count]);
    setCount("");
  };
  return (
    <body className="flex justify-center items-center h-screen">
      <div>
        <h1 className="text-4xl text-center">React + Typescript To Do App</h1>
        <Input count={count} setCount={setCount} addToList={addToList} />
        {list.map((item, index) =>
          item.length > 1 ? <List key={index} item={item} /> : null
        )}
      </div>
    </body>
  );
}

export default App;
