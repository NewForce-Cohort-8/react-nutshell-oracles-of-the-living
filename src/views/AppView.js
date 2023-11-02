import { NewsArticleList } from "../news/NewsArticleList";
import { NewsContainer } from "../news/NewsContainer";
import { NewsForm } from "../news/NewsForm";
import {Route, Routes} from "react-router-dom"

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
				<>
				<Routes>
				<Route path="/news" element= {<NewsContainer/>}/>
				</Routes>
				</>
				</div>
			</>
		);
	}
};
