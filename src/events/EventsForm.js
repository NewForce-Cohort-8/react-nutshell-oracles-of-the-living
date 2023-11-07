import { useState } from "react"
import { LocationSelect } from "./EventsLocation"
import userEvent from "@testing-library/user-event";



export const EventForm = ({updateEventState}) => {
 const [EventEntry, setEventEntry] = useState({})

 const activeUser = localStorage.getItem("activeUser");
	const activeUserObject = JSON.parse(activeUser);


 const handleControlledInputChange = (e) => {

    const newEventEntry = {...EventEntry}

    newEventEntry[`${e.target.name}`] = e.target.value

    setEventEntry(newEventEntry)
 }

 const saveEntry = (e) => {
    e.preventDefault()

    const entryToSend = {...EventEntry}
    //entryToSend.evntId = +entryToSend.eventId
    entryToSend.userId = activeUserObject.id
    if(entryToSend.title && entryToSend.dateTime && entryToSend.entryText ){
        fetch("http://localhost:8088/events", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(entryToSend),
        }).then(r => r.json())
        .then(r => setEventEntry({})).then(updateEventState)
 }}


    return ( 
        <form onSubmit={saveEntry}>
            <div className="field">
                <label className="label">Title</label>
                <div className="control">
                    <input name="title" className="input" type="text" placeholder="Name your event" value={EventEntry.title} onChange={handleControlledInputChange}/>
                </div>
            </div>
            <div className="field">
                <label className="label">Date</label>
                <div className="control">
                    <input className="input" type="Date" name="dateTime" value={EventEntry.dateTime}  onChange={handleControlledInputChange}/>
                </div>
            </div>
            <div className="field">
                <label className="label">Location</label>
                <div className="control">
                    <input name="location" className="input" type="text" placeholder="Name your location" value={EventEntry.location} onChange={handleControlledInputChange}/>
                </div>
                </div>
            <div className="field">
                <label className="label">Event</label>
                <div className="control">
                    <textarea name="entryText" className="textarea" placeholder="Event description ..." value={EventEntry.entryText}  onChange={handleControlledInputChange}></textarea> 
                </div>
            </div>
            <div className="control">
                <button type="submit" className="button is-primary">Submit</button>
            </div>
     
        </form>
    )
}