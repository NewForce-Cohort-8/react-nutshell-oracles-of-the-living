
import { useState, useEffect } from "react";
import { EventEntry } from "./EventsEntry";

export const EventList = ({ deleteEventEntry, updateEventState}) => {

const [eventEntries, setEventEntries] = useState([])


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
  {
    eventEntries.map((singleEvent) => <EventEntry key={`event--${singleEvent.id}`} singleEvent = {singleEvent} deleteEventEntry={deleteEventEntry} updateEventState={updateEventState}/> )
  }
</>
)
}
