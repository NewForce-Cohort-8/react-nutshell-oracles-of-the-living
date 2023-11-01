import { Route, Routes } from "react-router-dom";
import { TaskList } from "../tasks/TaskList";
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
				
				
					<Route path="/" element = {<TaskList />}> </Route>
				
				
				</Routes>
			</>
		);
	}
};

