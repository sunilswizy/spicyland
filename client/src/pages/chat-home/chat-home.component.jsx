import React from "react";
import "./chat-home.styles.scss";
import { useHistory } from "react-router-dom";

const ChatHome = () => {
	const history = useHistory();

	return (
		<div className='chat-home disable-select'>
			<div className='chat-room-content' data-aos='fade-right'>
				<div>
					<h2>SpicylanD!</h2>
					<h1>ChatrooM</h1>
					<p>
						join in the official chatroom of
						<br /> SpicylanD to get feedback.
					</p>
					<button onClick={() => history.push("/chat")}>CHAT NOW!</button>
				</div>
			</div>
			<div className='chat-room-image' data-aos='fade-left'>
				<img
					src='https://i.ibb.co/mJ74fKG/restaurant-graphic.png'
					alt='chatroom'
				/>
			</div>
		</div>
	);
};

export default ChatHome;
