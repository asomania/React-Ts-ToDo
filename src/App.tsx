import "./Tailwind.css";
import React from "react";
import Input from "./components/input";

function App() {
  const [count, setCount] = React.useState(0);
  return (
    <div className="App">
      <Input />
    </div>
  );
}

export default App;
