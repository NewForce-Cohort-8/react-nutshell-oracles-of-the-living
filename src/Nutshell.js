import { Route, Routes } from "react-router-dom";
import "./Nutshell.css";
import { Login } from "./auth/Login";
import { Register } from "./auth/Register";
import { ApplicationViews } from "./views/AppView";
import { NavBar } from "./nav/NavBar";
import { Authorized } from "./views/Authorized";
import { NewsForm } from "./news/NewsForm";
import { ArticleEntry } from "./news/NewsArticleEntry";

function Nutshell() {
	return (
		<Routes>
			<Route path='/login' element={<Login />} />
			<Route path='/register' element={<Register />} />
	


			<Route
				path='*'
				element={
					<Authorized>
						<>
							<NavBar />
							<ApplicationViews />
						</>
					</Authorized>
				}
			/>
		</Routes>
	);
}

export default Nutshell;
