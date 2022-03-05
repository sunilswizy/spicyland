import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import "./chat-room.styles.scss";
import { store } from "../../pages/firebase/firebase.config";
import {
	collection,
	limit,
	onSnapshot,
	orderBy,
	query,
	serverTimestamp,
} from "firebase/firestore";
import ChatMessage from "../chat-message/chat-message.component";

import { useSelector } from "react-redux";
import { sendAMessage } from "../../pages/firebase/firebase.config";

const ChatRoom = () => {
	const { currentUser } = useSelector(state => state.user);
	const scroll = useRef(null);

	const [messages, setMessages] = useState([]);
	const [message, setMessage] = useState();
	const messageRef = collection(store, "messages");
	const data = query(messageRef, orderBy("createdAt"));

	useEffect(() => {
		let unSubscribe = onSnapshot(data, snap => {
			setMessages(snap.docs.map(el => ({ ...el.data(), uid: el.id })));
		});
		scrollToBottom();
		return unSubscribe;
	}, []);

	useLayoutEffect(() => {
		scrollToBottom();
	}, [message, messages]);

	const scrollToBottom = () => {
		scroll.current?.scrollIntoView({ behavior: "smooth" });
	};

	const sendMessage = e => {
		e.preventDefault();
		const { id, photoURL } = currentUser;
		sendAMessage({ text: message, id, photoURL, createdAt: serverTimestamp() });
		setMessage("");
		scrollToBottom();
	};

	return (
		<div className='chat-room'>
			<div className='chat-room-header'>
				<h1>Spicyworld ChatrooM!</h1>
			</div>
			<div className='chat-room-msg'>
				{messages.map((msg, id) => (
					<ChatMessage key={id} msg={msg} />
				))}
				<div ref={scroll}></div>
			</div>
			<form className='chat-form' onSubmit={sendMessage}>
				<input
					type='text'
					value={message}
					onChange={e => setMessage(e.target.value)}
					className='input'
					placeholder='Type something about foods...'
				/>
				<button className='button'>SEND</button>
			</form>
		</div>
	);
};

export default ChatRoom;
