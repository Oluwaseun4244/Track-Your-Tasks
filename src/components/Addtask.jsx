import { useState } from "react"
import notify from "../Notify/Notify";

const Addtask = ({ onAdd, tasks }) => {
   const [text, setText] = useState('')
   const [time, setTime] = useState('')
   const [day, setDay] = useState('')
   const [reminder, setReminder] = useState(false)

   const onSubmit = (ev) => {
      ev.preventDefault()
      if (!text) {
         notify("kindly add a Task", "warn")
         return
      }
      
      onAdd({ text, day, reminder, time })

      setText('')
      setDay('')
      setReminder(false)
   }
   return (
      <form className="add-form" onSubmit={onSubmit}>
         
         <div className="form-control">
            <label className="label">Add Task</label>
            <input type="text" placeholder="add a task" value={text} onChange={(ev) => setText(ev.target.value)} />
         </div>
         <div className="form-control">
            <label className="label">Day</label>
            <input type="date"  value={day} onChange={(ev) => setDay(ev.target.value)} />
         </div>
         <div className="form-control">
            <label className="label">Time</label>
            <input type="time"  value={time} onChange={(ev) => setTime(ev.target.value)} />
         </div>
         <div className="form-control">   
            <label className="label">Set Reminder</label>
            <input type="checkbox" checked={reminder} onChange={(ev) => setReminder(ev.currentTarget.checked)} />
         </div>

         <input className="btn btn-block" type="submit" value="Save task" />
         {tasks.length > 0 && <h4 className="rem">Double tap task to set reminder</h4>}
      </form>
   )
}

export default Addtask
