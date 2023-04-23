import React from "react";
import "./homepage.styles.scss";

import StartPage from "../../components/Start-page/start-page.component";
import Directory from "../../components/Directory/directory.component";
import ChatHome from "../chat-home/chat-home.component";
import Footer from "../../components/Footer/footer.component";
import TableHome from "../table-home/table-home.component";
import ContactFrom from "../../components/Contact/contact.component";

const Homepage = () => {
	return (
		<div className='homepage'>
			<StartPage />
			<TableHome />
			<Directory />
			<ChatHome />
			<ContactFrom home />
			<Footer />
		</div>
	);
};

export default Homepage;
