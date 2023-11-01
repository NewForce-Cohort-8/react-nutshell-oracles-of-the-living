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
				<div className='Dashboard'></div>
			</>
		);
	}
};
