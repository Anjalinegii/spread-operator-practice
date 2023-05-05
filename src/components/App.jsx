import React, { useState } from "react";

function App() {
  const [arr, setarr] = useState([]);
  const [eventtyped, setevent] = useState("");
  function typing(event) {
    var input = event.target.value;
    setevent(input);
  }
  function addonlist(event) {
    setarr((prev) => {
      return [...prev, eventtyped];
    });
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={typing} type="text" />
        <button onClick={addonlist}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {arr.map((item) => {
            return <li>{item}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
