import { useState } from "react";
import Taskitem from "./Taskitem";

export default function Task() {
  const [task, setTask] = useState("");
  const [date, setDate] = useState("");
  const onClick = () => {
    fetch("https://674ed77abb559617b26cf1bd.mockapi.io/exam", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ task, date }),
    }).catch((error) => console.error(error));
  };
  return (
    <div>
      <h1>Tak Traker</h1>
      <section>
        <input type="text" onChange={(e) => setTask(e.target.value)} />
        <input type="date" onChange={(e) => setDate(e.target.value)} />
        <button onClick={onClick}>Add Task</button>
      </section>
      <Taskitem />
    </div>
  );
}
