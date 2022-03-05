import React from "react";
import "./chat.styles.scss";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/selector";

import ChatRoom from "../chat-room/chat-room.component";

const Chat = ({ currentUser }) => {
	return <div className='chat'>{currentUser && <ChatRoom />}</div>;
};

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(Chat);
