
import { EventForm } from "../events/EventsForm";
import { EventList } from "../events/EventsList";


import { Outlet, Route, Routes } from "react-router-dom";
import { ImageEdit } from "../images/ImageEdit";
import { ImageForm } from "../images/ImageForm";
import { ImageList } from "../images/ImageList";
import { TaskList } from "../tasks/TaskList";
import { TaskForm } from "../tasks/TaskForm";
import { TaskCreateTaskButton } from "../tasks/TaskCreateTask";
import { TaskEdit } from "../tasks/TaskEdit";
import { NewsContainer } from "../news/NewsContainer";
import { ImageContainer } from "../images/ImageContainer";

import { MessageContainer } from "../messages/MessageContainer";
// updateEventState={<EventForm/>}

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
					<Route path="/events/create" element={<EventForm  />} />
					<Route path="/events" element={<EventList/>}/>
					
					</Routes>
				
					<Routes>
						<Route
							path='/'
							element={
								<>
									<h1>Nutshell</h1>
									<Outlet />
								</>
							}
						>
							<Route path='images' element={<ImageContainer />} />
							<Route path='image/create' element={<ImageForm />} />
							<Route path='images/:imageId/edit' element={<ImageEdit />} />
							<Route path='/tasks' element={<TaskList />}>
								{" "}
							</Route>
							<Route path='/task/create' element={<TaskForm />}>
								{" "}
							</Route>
							<Route path='/tasks' element={<TaskCreateTaskButton />}>
								{" "}
							</Route>
							<Route path='tasks/:taskId/edit' element={<TaskEdit />} />
              <Route path="/news" element= {<> <NewsContainer/> </>}/>
						</Route>
							<Route path='/messages' element={<MessageContainer/>} />
					</Routes>
				</div>
			</>
		);
	}
};
