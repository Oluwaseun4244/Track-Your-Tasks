import { useState } from "react"

const Addtask = ({ onAdd }) => {
   const [text, setText] = useState('')
   const [time, setTime] = useState('')
   const [day, setDay] = useState('')
   const [reminder, setReminder] = useState(false)

   const onSubmit = (ev) => {
      ev.preventDefault()
      if (!text) {
         alert("kindly add text")
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
            <label>Add Task</label>
            <input type="text" placeholder="add a task" value={text} onChange={(ev) => setText(ev.target.value)} />
         </div>
         <div className="form-control">
            <label>Date here</label>
            <input type="date"  value={day} onChange={(ev) => setDay(ev.target.value)} />
         </div>
         <div className="form-control">
            <label>Time</label>
            <input type="time"  value={time} onChange={(ev) => setTime(ev.target.value)} />
         </div>
         <div className="form-control">
            <label>Set Reminder</label>
            <input type="checkbox" checked={reminder} onChange={(ev) => setReminder(ev.currentTarget.checked)} />
         </div>

         <input className="btn btn-block" type="submit" value="Save task" />
      </form>
   )
}

export default Addtask
