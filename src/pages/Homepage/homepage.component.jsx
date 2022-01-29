import React from "react";
import "./homepage.styles.scss";

import StartPage from "../../components/Start-page/start-page.component";
import Directory from "../../components/Directory/directory.component";
import Footer from "../../components/Footer/footer.component";

const Homepage = () => {
	return (
		<>
			<StartPage />
			<Directory />
			<Footer />
		</>
	);
};

export default Homepage;
