import React from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

import { Button } from "@mui/material";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
	"& .MuiDialogContent-root": {
		padding: theme.spacing(2),
	},
	"& .MuiDialogActions-root": {
		padding: theme.spacing(1),
	},
}));

const BootstrapDialogTitle = props => {
	const { children, onClose, ...other } = props;

	return (
		<DialogTitle sx={{ m: 0, p: 2 }} {...other}>
			{children}
			{onClose ? (
				<IconButton
					aria-label='close'
					onClick={onClose}
					sx={{
						position: "absolute",
						right: 8,
						top: 8,
						color: theme => theme.palette.grey[500],
					}}>
					<CloseIcon />
				</IconButton>
			) : null}
		</DialogTitle>
	);
};

BootstrapDialogTitle.propTypes = {
	children: PropTypes.node,
	onClose: PropTypes.func.isRequired,
};

const DialogTable = ({
	open,
	handleClose,
	handleReserve,
	currentDate,
	guests,
	time,
}) => {
	const handleToggle = () => {
		handleClose();
		handleReserve();
	};

	return (
		<BootstrapDialog
			onClose={handleClose}
			aria-labelledby='customized-dialog-title'
			open={open}>
			<BootstrapDialogTitle
				id='customized-dialog-title'
				className='disable-select'
				onClose={handleClose}>
				<i className='fa fa-utensils' />
				SpicylanD!
			</BootstrapDialogTitle>
			<DialogContent dividers className='dialogBox'>
				<h1>Complete Your Reservation</h1>
				<div>
					<i className='fa fa-address-book'> Address</i>
					<p>
						22/23, Venkatanarayana Road, T Nagar, Chennai T Nagar T Nagar,
						Chennai 600017
					</p>
				</div>
				<div>
					<i className='fa fa-calendar'> Time</i>
					<p>
						{currentDate} - {time}
					</p>
				</div>
				<div>
					<i className='fa fa-users'> Party</i>
					<p>{guests}</p>
				</div>
				<div>
					<i className='fa fa-book'> Menu</i>
					<p> Juices, Biriyani, Pizza</p>
				</div>
				<div>
					<i className='fa fa-ban'> Cancellation Policy</i>
					<p>
						While you won't be charged if you need to cancel, we ask that you do
						so at least 24 hours in advance.
					</p>
				</div>
				<div>
					<i className='fa fa-utensils'> SpicylanD!</i>
					<p>SpicylanD, a land of spicy items!</p>
				</div>
			</DialogContent>
			<DialogActions className='dialogActions'>
				<Button variant='error' onClick={handleToggle}>
					RESERVE NOW
				</Button>
			</DialogActions>
		</BootstrapDialog>
	);
};

export default DialogTable;
