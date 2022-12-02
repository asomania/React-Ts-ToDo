import React from "react"
const dizi=[];

const ToDo =({name}) => {
  dizi.push(name);
  console.log(dizi);
  return (
  <>
  {dizi.map(deg=>(<div className="border-2 border-indigo-600">{deg} &nbsp;</div>  ))}
    <br/>
  </>
    
  )
}

export default ToDo