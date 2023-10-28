import React from "react";

function Task({ text, category, deletedTask }) {
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button onClick={() => deletedTask(text)} className="delete">
        X
      </button>
    </div>
  );
}

export default Task;
