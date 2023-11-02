import { Route } from "react-router-dom";
import { MessageList } from "../messages/MessageList";
import { Message } from "../messages/Message";
import { MessageContainer } from "../messages/MessageContainer";


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
					<MessageContainer />
				</div>
			</>
		);
	}
};
