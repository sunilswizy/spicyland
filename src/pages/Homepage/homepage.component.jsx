import React from "react";
import "./homepage.styles.scss";

import StartPage from "../../components/Start-page/start-page.component";
import Directory from "../../components/Directory/directory.component";

const Homepage = () => {
	return (
		<>
			<StartPage />
			<Directory />
		</>
	);
};

export default Homepage;
