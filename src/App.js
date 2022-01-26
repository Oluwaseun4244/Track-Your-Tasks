import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import Addtask from "./components/Addtask";
import notify from "./Notify/Notify";
import "react-toastify/dist/ReactToastify.css";
import data from "./Data";

function App() {
  const [showAddTask, setshowAddTask] = useState(true);
  const todoIsThere = localStorage.getItem("Todos");
  const getTodo = JSON.parse(localStorage.getItem("Todos"));
  const [tasks, setTask] = useState(todoIsThere ? getTodo : data);

  const addtask = (newTask) => {
    setTask([...tasks, newTask]);
    let copy = ([...tasks, newTask]);
    localStorage.setItem("Todos", JSON.stringify(copy));
    notify(`Task " ${newTask.text}" Added`, "success");
  };

  const deleteTask = (ev, text) => {
    let remainingTasks = tasks.filter((task) => {
     return task.id !== ev
    });
    setTask(remainingTasks)
    localStorage.setItem("Todos", JSON.stringify(remainingTasks));
    notify(`Task " ${text}" deleted`, "warn");
  };

  const toggleReminder = (id) => {
    setTask(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
      
    );
    // localStorage.setItem("Todos", JSON.stringify(tasks));
  };

  return (
    <div className="Container">
      <Header
        title="Task Tracker"
        onAdd={() => setshowAddTask(!showAddTask)}
        showAdd={showAddTask}
      />

      {showAddTask && <Addtask onAdd={addtask} tasks={tasks} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        <h3>No task</h3>
      )}
    </div>
  );
}

export default App;
