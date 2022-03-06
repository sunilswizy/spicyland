import React from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

import StripeButton from "../stripe-btn/stripe-btn.component";
import "./table-dialog.styles.scss";

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

	const price = guests * 150;
	const reservedTime = `${currentDate} - ${time}`;

	return (
		<BootstrapDialog
			onClose={handleClose}
			aria-labelledby='customized-dialog-title'
			open={open}>
			<BootstrapDialogTitle
				id='customized-dialog-title'
				className='disable-select'
				onClose={handleClose}>
				<span className='dialog-heading'>
					<i style={{ color: "#ee536d" }} className='fa fa-utensils' />{" "}
					SpicylanD!
				</span>
			</BootstrapDialogTitle>
			<DialogContent dividers className='dialogBox'>
				<div className='dialog-con-table'>
					<h1>Complete Your Reservation!</h1>
					<div className='dialog-con-table-child'>
						<i className='fa fa-address-book' />
						<span>Address</span>
						<p>22/23, Kovaiputhur Road, Coimbatore, Coimbatore - 600017</p>
					</div>

					<div className='dialog-con-table-child'>
						<i className='fa fa-calendar' />
						<span>Time</span>

						<p>{reservedTime}</p>
					</div>

					<div className='dialog-con-table-child'>
						<i className='fas fa-birthday-cake'></i>
						<span>Party</span>
						<p>{guests} Guests</p>
					</div>

					<div className='dialog-con-table-child'>
						<i className='fas fa-dollar-sign' />
						<span>Price</span>
						<p>$ {price}</p>
					</div>

					<div className='dialog-con-table-child'>
						<i className='fa fa-book' />
						<span>Menu</span>
						<p> Juices, Biriyani, Pizza</p>
					</div>

					<div className='dialog-con-table-child'>
						<i className='fas fa-eject'></i>
						<span>Cancellation Policy</span>
						<p>
							While you won't be charged if you need to cancel, we ask that you
							do so at least 24 hours in advance.
						</p>
					</div>

					<div className='dialog-con-table-child'>
						<i className='fa fa-utensils' />
						<span>SpicylanD!</span>
						<p>Spicyland, a land of spicy items!</p>
					</div>
				</div>
			</DialogContent>
			<DialogActions className='dialogActions'>
				<StripeButton
					price={price}
					reservedTime={reservedTime}
					guests={guests}
					handleClick={handleToggle}
				/>
			</DialogActions>
		</BootstrapDialog>
	);
};

export default DialogTable;
