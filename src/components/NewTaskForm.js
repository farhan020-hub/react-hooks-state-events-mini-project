import React, { useState } from "react";

function NewTaskForm({ onTaskFormSubmit, categories }) {
  const [newTaskFields, setNewTaskFields] = useState({
    text: "",
    category: "Code",
  });

  function handleFields(e) {
    const { name, value } = e.target;
    setNewTaskFields({ ...newTaskFields, [name]: value });
  }
 

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onTaskFormSubmit(newTaskFields);
      }}
      className="new-task-form"
    >
      <label>
        Details
        <input
          value={newTaskFields.text}
          onChange={handleFields}
          type="text"
          name="text"
        />
      </label>

      <label>
        Category
        <select
          value={newTaskFields.category}
          onChange={handleFields}
          name="category"
        >
          {/* render <option> elements for each category here */}
          {categories.map((category, index) => (
            <option key={index}>{category}</option>
          ))}
        </select>
      </label>

      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
