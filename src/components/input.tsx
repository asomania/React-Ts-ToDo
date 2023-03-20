import React from "react";

type Props = {
  count: string;
  setCount: React.Dispatch<React.SetStateAction<string>>;
  addToList: () => void;
};
const input: React.FC<Props> = ({ count, setCount, addToList }) => {
  return (
    <div className="flex justify-center gap-3">
      <input
        type="text"
        value={count}
        onChange={(e) => setCount(e.target.value)}
        className="border flex justify-center"
      />
      <button className="border bg-sky-500  p-1 rounded" onClick={addToList}>
        Ekle
      </button>
    </div>
  );
};

export default input;
