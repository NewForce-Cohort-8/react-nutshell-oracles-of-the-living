import { Outlet, Route, Routes } from "react-router-dom";
import { ImageEdit } from "../images/ImageEdit";
import { ImageForm } from "../images/ImageForm";
import { ImageList } from "../images/ImageList";

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
							<Route path='images' element={<ImageList />} />
							<Route path='image/create' element={<ImageForm />} />
							<Route path='images/:imageId/edit' element={<ImageEdit />} />
						</Route>
					</Routes>
				</div>
			</>
		);
	}
};
