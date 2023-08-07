
import React,{useState} from "react";
import './../styles/App.css';
import Child from "./Child";

const App = () => {

  let [selected,setSelected] = useState("")

  const child1 = {
    title: 'Child Component 1',
    button: 'Option 1'
  }

  const child2 = {
    title: 'Child Component 2',
    button: 'Option 2'
  }

  return (
    <div className="parent">
        <h1>Parent Component</h1>
        <div className="child1">
          <Child child={child1} setSelected={setSelected}/>
        </div>
        <div className="child2">
          <Child child={child2} setSelected={setSelected}/>
        </div>
        <p>Selected Option: {selected}</p>
    </div>
  )
}

export default App
