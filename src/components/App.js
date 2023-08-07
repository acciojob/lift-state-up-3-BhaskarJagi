
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
    <div>
        <h1>Parent Component</h1>
        <Child child={child1} setSelected={setSelected}/>
        <Child child={child2} setSelected={setSelected}/>
        <p>Selected option: {selected}</p>
    </div>
  )
}

export default App
