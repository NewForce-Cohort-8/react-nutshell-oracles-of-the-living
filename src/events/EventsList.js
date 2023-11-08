// NH
import { useState, useEffect } from "react";
import { EventEntry } from "./EventsEntry";
import { EventForm } from "./EventsForm";
import { useNavigate } from "react-router-dom";


export const EventList = ({ }) => {

const [eventEntries, setEventEntries] = useState([])
 const navigate = useNavigate()

  useEffect(
    () => {
      fetch("http://localhost:8088/events")
      .then(response => response.json())
      .then((eventArray) => {
        setEventEntries(eventArray)
      })
    },
    []
  )

    
return (
    <>
    <button onClick={() => navigate("/events/create")}> Create New Event </button>
  {
    eventEntries.map((singleEvent) => {
    return <>
    <EventEntry key={`event--${singleEvent.id}`} singleEvent = {singleEvent} /> </>}) 
  }
</>
)
}
