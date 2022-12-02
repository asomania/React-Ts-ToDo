import "./Tailwind.css";
import React from "react";
import Todo from "./toDo";

function App() {
  const [name, setName] = React.useState([]);
  return (
    <div className="App">
      <div className="flex m-2 justify-center">
        <input
          type="text"
          id="textBox"
          className="border-2 border-indigo-600"
        />
        <button
          className="border-2 border-indigo-600 w-12 ml-2"
          onClick={() => setName(document.getElementById("textBox").value)}
        >
          Ekle
        </button>
        <br />
      </div>
      <div className=" flex-col justify-center">
        <Todo name={name}/>
      </div>
    </div>
  );
}

export default App;
