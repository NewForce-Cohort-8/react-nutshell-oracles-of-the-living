import { Route, Routes } from "react-router-dom";
import { EventForm } from "../events/EventsForm";
import { EventList } from "../events/EventsList";

<div className='Dashboard'>
	<header className='App-header'>
		<h1>Welcome to Nutshell</h1>
	</header>
</div>;
export const ApplicationViews = () => {
	const localNutshellUser = localStorage.getItem("activeUser");
	const nutshellUserObject = JSON.parse(localNutshellUser);

	if (nutshellUserObject) {
		return (
			<>
				<div className='Dashboard'>
					<Routes>
					<Route path="/events/create" element={<EventForm updateEventState={<EventForm/>} />} />
					<Route path="/events" element={<EventList/>}/>
					</Routes>
				</div>
			</>
		);
	}
};
