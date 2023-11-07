import { Outlet, Route, Routes } from "react-router-dom";
import { ImageEdit } from "../images/ImageEdit";
import { ImageForm } from "../images/ImageForm";
import { ImageList } from "../images/ImageList";
import { TaskList } from "../tasks/TaskList";
import { TaskForm } from "../tasks/TaskForm";
import { TaskCreateTaskButton } from "../tasks/TaskCreateTask";
import { TaskEdit } from "../tasks/TaskEdit";
import { ImageContainer } from "../images/ImageContainer";
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
						</Route>
					</Routes>
				</div>
			</>
		);
	}
};
