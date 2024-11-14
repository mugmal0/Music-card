import Input from "./components/Input";
import Container from "./components/wrapper";
import { useState } from "react";

export default function App() {
  //storing input task in value
  const [value, setValue] = useState("");

  // "task" will store list of tasks
  const [tasks, setTask] = useState([]);

  function addTask() {
    if (value.trim()) {
      setTask([...tasks, value]);
      setValue("");
    } else {
      alert("error");
    }
  } // Handle deleting a task
  const deleteTask = (indexToDelete) => {
    setTask(tasks.filter((_, index) => index !== indexToDelete));
  };
  return (
    <div className="App">
      <Input
        className="input"
        type="text"
        placeholder="Add a routine"
        value={value}
        onAdd={addTask}
        onChange={(e) => setValue(e.target.value)}
      />
      <Container className="wrapper">
        {tasks.map((task, index) => (
          <div className="task-wrapper" key={index}>
            <p>
              {task}
              <hr className="hr" />
            </p>
            <button onClick={() => deleteTask(index)}>Delete</button>
          </div>
        ))}
      </Container>
    </div>
  );
}
