import React from "react";
type Props = {
  item: string;
};
const list: React.FC<Props> = ({ item }) => {
  return (
    <div>
      <ul>
        <li className="bg-slate-200 mt-2 rounded p-2">{item}</li>
      </ul>
    </div>
  );
};

export default list;
