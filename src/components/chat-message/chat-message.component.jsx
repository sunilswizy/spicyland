import React from "react";
import "./chat-message.styles.scss";

import { useSelector } from "react-redux";

const ChatMessage = ({ msg: { text, id, photoURL, displayName } }) => {
	const { currentUser } = useSelector(state => state.user);
	const messageClass = currentUser.id === id ? "sent" : "received";

	return (
		<div className={`message ${messageClass}`}>
			<img src={photoURL} alt={displayName} referrerPolicy='no-referrer' />
			<p>{text}</p>
		</div>
	);
};

export default ChatMessage;
