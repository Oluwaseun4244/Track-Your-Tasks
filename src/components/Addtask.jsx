import { useState } from "react";
import notify from "../Notify/Notify";

const Addtask = ({ onAdd, tasks }) => {

  const [taskObj, setTaskObj] = useState({
    text: "",
    day: "",
    time: "",
    reminder: false
  });

  const handleChange = (ev) => {
    let value = ev.target.value;
    const newid = Math.floor(Math.random() * 200000) + 1;
    // const newTask = {id:id, ...taskObj}
    setTaskObj({ ...taskObj, id: newid, [ev.target.name]: value });
  };

  const changeRminder = (ev) => {
    if (ev.target.checked) {
      setTaskObj({ ...taskObj, reminder: true });
    } else {
      setTaskObj({ ...taskObj, reminder: false });
    }
  };

  const onSubmit = (ev) => {
    ev.preventDefault();
    if (!taskObj.text) {
      notify("kindly add a Task", "warn");
      return;
    }

    onAdd(taskObj);

    setTaskObj({
      text: "",
      day: "",
      time: "",
    });

  };

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label className="label">Add Task</label>

        <input
          name="text"
          type="text"
          placeholder="add a task"
          value={taskObj.text}
          onChange={handleChange}
        />
      </div>
      <div className="form-control">
        <label className="label">Day</label>

        <input
          name="day"
          type="date"
          value={taskObj.day}
          onChange={handleChange}
        />
      </div>
      <div className="form-control">
        <label className="label">Time</label>
        <input
          name="time"
          type="time"
          value={taskObj.time}
          onChange={handleChange}
        />
      </div>
      <div className="form-control">
        <label className="label">Set Reminder</label>
        <input
          type="checkbox"
          checked={taskObj.reminder}
          onChange={(ev) => changeRminder(ev)}
        />
      </div>

      <input className="btn btn-block" type="submit" value="Save task" />
      {tasks.length > 0 && (
        <h4 className="rem">Double tap task to set reminder</h4>
      )}
    </form>
  );
};

export default Addtask;
