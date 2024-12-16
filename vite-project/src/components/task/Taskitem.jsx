/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

export default function Taskitem() {
  //const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://674ed77abb559617b26cf1bd.mockapi.io/exam")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
      });
  }, []);

  return (
    <div>
      <section>
        <label></label>
        <label>Due: </label>
      </section>
      <section>
        <button>Mark as Complete</button>
        <button>Delete</button>
      </section>
    </div>
  );
}
