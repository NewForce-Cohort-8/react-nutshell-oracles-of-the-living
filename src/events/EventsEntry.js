// NH
import { useEffect, useState } from "react"
import { LocationSelect } from "./EventsLocation"



export const EventEntry = ({singleEvent }) => {
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
  entryToSend.eventId = +entryToSend.eventId

  
      fetch(`http://localhost:8088/events/${editEvent.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(entryToSend),
      }).then(r=> r.json())
      .then(() => {
        setShowForm(false)
        })
      
}


 const deleteEventsEntry = (deleteEvent) => {
  if(singleEvent.id){
      return <button onClick={() => {
          fetch(`http://localhost:8088/events/${deleteEvent}`, {
              method: "DELETE"
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
    </div>
    <div className="event-body">
      </div>
      <div>Location: {singleEvent.location}</div>
      <div>Description: {singleEvent.entryText}</div>
      <button className="btn btn-warning" aria-label="edit" onClick={() => setShowForm(!showForm)}>Edit</button>
      <button className="btn btn-danger" aria-label="delete" onClick={() => {
         deleteEventsEntry(+singleEvent.id)}}>Delete</button>

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
</div>
<div className="event-body">
<input name="entryText" type="text" placeholder="Event entry field." value={editEvent.location}  onChange={handleControlledInputChange} />
</div>
<div className="event-body">
<textarea name="entryText" className="textarea" placeholder="Event location field." value={editEvent.entryText}  onChange={handleControlledInputChange}> </textarea>
</div>

<button className="btn btn-success"  onClick={(e) => updateEntry(e)}>Save</button>
<button className="btn btn-secondary"  onClick={() => setShowForm(!showForm)}>Cancel</button>


</article>
}
    </>
}
