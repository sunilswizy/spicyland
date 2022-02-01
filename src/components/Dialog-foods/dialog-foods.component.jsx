import React from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import "./dialog.foods.styles.scss";

import TripleButton from "../Thriple-button/thriple-button.component";
import MenuItem from "../styled-button/styled-button.component";
import CartButton from "../Cart-button/cart-button.component";
import { Typography } from "@mui/material";

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

const DialogFoods = ({ open, handleClose, item, cartItem, handleClick }) => {
	return (
		<BootstrapDialog
			onClose={handleClose}
			aria-labelledby='customized-dialog-title'
			open={open}>
			<BootstrapDialogTitle
				id='customized-dialog-title'
				className='disable-select'
				onClose={handleClose}>
				SpicylanD!
			</BootstrapDialogTitle>
			<DialogContent dividers className='dialogBox'>
				<MenuItem title={item.name} imageUrl={item.imageUrl} />
			</DialogContent>
			<DialogActions className='dialogActions'>
				<h1 className='disable-select'>${item.price}</h1>
				{cartItem ? (
					<div className='cart-triple-button'>
						<TripleButton item={item} cartItem={cartItem} />
					</div>
				) : (
					<div className='cart-button'>
						<CartButton dialog className='disable-select' onClick={handleClick}>
							ADD
						</CartButton>
					</div>
				)}
			</DialogActions>
		</BootstrapDialog>
	);
};

export default DialogFoods;
