import { Route, Routes } from "react-router-dom";
import { TaskList } from "../tasks/TaskList";
import { TaskForm } from "../tasks/TaskForm";
import { TaskCreateTaskButton } from "../tasks/TaskCreateTask";
import { TaskEdit } from "../tasks/TaskEdit";
import { NewsContainer } from "../news/NewsContainer";

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
			<Routes>
				
	
					<Route path="/tasks" element = {<TaskList />}> </Route>
					<Route path="/task/create" element = {<TaskForm />}> </Route>
					<Route path="/tasks" element = {<TaskCreateTaskButton />}> </Route>
					<Route path="tasks/:taskId/edit" element={ <TaskEdit/> } />
					<Route path="/news" element= {<NewsContainer/>}/>
				
				</Routes>
			</>
		);
	}
};

