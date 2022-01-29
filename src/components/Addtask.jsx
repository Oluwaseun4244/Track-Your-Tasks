import { useEffect, useState } from "react";
import notify from "../Notify/Notify";

const Addtask = ({ onAdd, tasks }) => {
  const [todaysDate, setTodaysDate] = useState("")
  const [taskObj, setTaskObj] = useState({
    text: "",
    day: "",
    time: "",
    reminder: false,
  });


  const handleChange = (ev) => {
    let value = ev.target.value;
    const newid = Math.floor(Math.random() * 200000) + 1;
    // const newTask = {id:id, ...taskObj}
    setTaskObj({ ...taskObj, id: newid, [ev.target.name]: value });
    console.log("date", taskObj.day);
    // console.log("date", taskObj.day);
  };

  const changeRminder = (ev) => {
    ev.target.checked
      ? setTaskObj({ ...taskObj, reminder: true })
      : setTaskObj({ ...taskObj, reminder: false });
  };

  const onSubmit = (ev) => {
    ev.preventDefault();
    if (!taskObj.text || !taskObj.time) {
      notify("kindly fill the input fileds", "warn");
      return;
    }
    console.log("date date", taskObj.day);
    onAdd(taskObj);

    setTaskObj({
      text: "",
      day: todaysDate,
      time: "",
      reminder: false
    });
  };

  const getDate = () => {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, "0");
    let mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    let yyyy = today.getFullYear();

    today = `${yyyy}-${mm}-${dd}`

    setTaskObj({...taskObj, day: today})
    setTodaysDate(today)
  };

  useEffect(() => {
    getDate();
  }, []);

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
          // value={todaysDate}
          value={taskObj.day }
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
        <label className="reminder-label">Set Reminder</label>
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
