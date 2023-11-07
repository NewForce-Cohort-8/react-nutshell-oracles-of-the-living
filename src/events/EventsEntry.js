import { useEffect, useState } from "react"
import { LocationSelect } from "./EventsLocation"


export const EventEntry = ({singleEvent, deleteEventEntry, updateEventState}) => {
  const [showForm, setShowForm] = useState(false)
  const [editEvent, setEditEvent] = useState({})

useEffect(() => {
  setEditEvent(singleEvent)
},[])

const handleControlledInputChange = (e) => {

  const newEventEntry = {...editEvent}

  newEventEntry[`${e.target.name}`] = e.target.value

  setEditEvent(newEventEntry)
}

const updateEntry = (e) => {
  e.preventDefault()

  const entryToSend = {...editEvent}
  entryToSend.moodId = +entryToSend.moodId

  
      fetch(`http://localhost:8088/events/${editEvent.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(entryToSend),
      }).then(r=> r.json())
      .then(() => {
        setShowForm(false)
        updateEventState()})
      
}


const deleteEventsEntry = () => {
  if(singleEvent.id){
      return <button onClick={() => {
          fetch("http://localhost:8088/events/${events.id}", {
              method: "DELETE"
          })
          .then(() => {
              
          })
      }} className= "delete">Delete</button>
  }
  else {
      return ""
  }
}



   return <>
   {!showForm ? 
    <article className="event">
 
          <div className="event-header">
           <p>{singleEvent.title}</p>
           <p></p>
           <p></p>
           <p></p>
           <p></p>
           <p></p>
           <p></p>
           <p></p>
           <p></p>
           <p></p>
           <p>{singleEvent.dateTime}</p>
      <button className="edit" aria-label="edit" onClick={() => setShowForm(!showForm)}></button>
      <button className="delete" aria-label="delete" onClick={() => deleteEventsEntry(singleEvent.id)}></button>
    </div>
    <div className="event-body">
    {singleEvent.entryText}
      </div>
      <div>users: {singleEvent.event}</div>
      <div>users: {singleEvent.user}</div>

    </article>
    :
    <article className="event">
 
    <div className="event-header">
    <input name="title"  type="text" placeholder="Event name" value={editEvent.title} onChange={handleControlledInputChange}/>     <p></p>
     <p></p>
     <p></p>
     <p></p>
     <p></p>
     <p></p>
     <p></p>
     <p></p>
     <p></p>
     <input type="Date" name="dateTime" value={editEvent.dateTime}  onChange={handleControlledInputChange}/>
<button className="button is-small is-success"  onClick={(e) => updateEntry(e)}>Save</button>
<button className="button is-small is-danger"  onClick={() => setShowForm(!showForm)}>Cancel</button>
</div>
<div className="event-body">
<textarea name="entryText" className="textarea" placeholder="Event entry field." value={editEvent.entryText}  onChange={handleControlledInputChange}></textarea>
</div>
<LocationSelect handleControlledInputChange={handleControlledInputChange} EventEntry={editEvent} />
<div>User: {singleEvent.userId}</div>



</article>
}
    </>
}