import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import Typography from "@mui/material/Typography";
import { withRouter } from "react-router-dom";

const ImageButton = styled(ButtonBase)(({ theme }) => ({
	position: "relative",
	height: 300,
	[theme.breakpoints.down("sm")]: {
		width: "100% !important",
		height: 100,
	},
	"&:hover, &.Mui-focusVisible": {
		zIndex: 1,
		"& .MuiImageBackdrop-root": {
			opacity: 0.15,
		},
		"& .MuiImageMarked-root": {
			opacity: 0,
		},
		"& .MuiTypography-root": {
			border: "4px solid currentColor",
		},
	},
}));

const ImageSrc = styled("span")({
	position: "absolute",
	left: 0,
	right: 0,
	top: 0,
	bottom: 0,
	backgroundSize: "cover",
	backgroundPosition: "center 40%",
});

const Image = styled("span")(({ theme }) => ({
	position: "absolute",
	left: 0,
	right: 0,
	top: 0,
	bottom: 0,
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	color: theme.palette.common.white,
}));

const ImageBackdrop = styled("span")(({ theme }) => ({
	position: "absolute",
	left: 0,
	right: 0,
	top: 0,
	bottom: 0,
	backgroundColor: theme.palette.common.black,
	opacity: 0.4,
	transition: theme.transitions.create("opacity"),
}));

const ImageMarked = styled("span")(({ theme }) => ({
	height: 3,
	width: 18,
	backgroundColor: theme.palette.common.white,
	position: "absolute",
	bottom: -2,
	left: "calc(50% - 9px)",
	transition: theme.transitions.create("opacity"),
}));

const MenuItem = ({ title, imageUrl, linkUrl, history }) => {
	return (
		<Box
			sx={{
				display: "flex",
				flexWrap: "wrap",
				flex: 1,
				width: "100%",
				justifyContent: "center",
				alignItems: "center",
				margin: "2rem 0",
			}}
			onClick={() => history.push(`${linkUrl}`)}>
			<ImageButton
				focusRipple
				style={{
					width: "90%",
				}}>
				<ImageSrc style={{ backgroundImage: `url(${imageUrl})` }} />
				<ImageBackdrop className='MuiImageBackdrop-root' />
				<Image>
					<Typography
						component='span'
						variant='subtitle1'
						color='inherit'
						sx={{
							position: "relative",
							p: 4,
							pt: 2,
							pb: theme => `calc(${theme.spacing(1)} + 6px)`,
						}}>
						{title}
						<ImageMarked className='MuiImageMarked-root' />
					</Typography>
				</Image>
			</ImageButton>
		</Box>
	);
};

export default withRouter(MenuItem);
