import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";

function App() {
  const [task, setTask] = useState(TASKS);
  const [categories] = useState(CATEGORIES);
  const [selectedCategoryButton, setSelectedCategoryButton] = useState("All");

  function addNewTasktoList(newTask) {
    setTask([...task, newTask]);
  }

  function deleteTask(deleteTask) {
    setTask(task.filter((task) => task.text !== deleteTask));
  }

  const taskDisplayed = task.filter((task) => {
    if (selectedCategoryButton === "All") return true;
    return selectedCategoryButton === task.category;
  });

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={categories}
        onButton={selectedCategoryButton}
        selectedButton={setSelectedCategoryButton}
      />
      <NewTaskForm
        onTaskFormSubmit={addNewTasktoList}
        categories={categories}
      />
      <TaskList deletedTask={deleteTask} tasks={taskDisplayed} />
    </div>
  );
}

export default App;
