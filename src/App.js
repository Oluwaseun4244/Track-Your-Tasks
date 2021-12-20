import { useState } from "react"
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import Addtask from "./components/Addtask";

function App() {
  const  [showAddTask, setshowAddTask] = useState(true)
  const [tasks, setTask] = useState(
    [
      {
        id: 1,
        text: "Doctors appointement",
        day: "Feb 5th at 2:20pm",
        reminder: true,
      },
      {
        id: 2,
        text: "Meeting at School",
        day: "Feb 6th at 1:30pm",
        reminder: true,
      },
      {
        id: 3,
        text: "Food Shopping",
        day: "Feb 5th at 2:30pm",
        reminder: false,
      },
    ]
  )

  const addtask = (taskObj) => {
    const id = Math.floor(Math.random() * 200000) + 1
    const newTask = {id, ...taskObj}
    setTask([...tasks, newTask])

  }

  const deleteTask = (ev) => {
    setTask(tasks.filter(task => task.id !== ev))
  }

  const toggleReminder = (ev) => {
    setTask(tasks.map(task => task.id === ev ? { ...task, reminder: !task.reminder } : task))

  }


  return (
    <div className="Container">
      <Header title="Task Tracker"onAdd={()=> setshowAddTask(!showAddTask)} showAdd={showAddTask}/>
      {showAddTask && <Addtask onAdd={addtask}/>}
      {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />) : ("No task")}
    </div>
  );
}

export default App;
