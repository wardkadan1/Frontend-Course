import { useState } from "react";

export default function Username() {
  const [name, change] = useState("");

  return (
    <div>
      <label htmlFor="Username">Username:</label>
      <input
        type="text"
        name="Username"
        onChange={(event) => {
          change(event.target.value);
        }}
      />
      <button
        onClick={() => {
          console.log(name);
        }}
      >
        Log
      </button>
    </div>
  );
}
