import React from "react";
import "./thriple-button.styles.scss";

import PropTypes from "prop-types";
import ButtonUnstyled, {
	buttonUnstyledClasses,
} from "@mui/base/ButtonUnstyled";
import { styled } from "@mui/system";

import { connect } from "react-redux";
import { addItemToCart } from "../../redux/cart/action";
import { removeItemFromCart } from "../../redux/cart/action";

const ButtonRoot = React.forwardRef(function ButtonRoot(props, ref) {
	const { children, ...other } = props;

	return (
		<svg width='50' height='50' {...other} ref={ref}>
			<polygon points='0,50 0,0 50,0 50,50' className='bg' />
			<polygon points='0,50 0,0 50,0 50,50' className='borderEffect' />
			<foreignObject x='0' y='0' width='50' height='50'>
				<div className='content'>{children}</div>
			</foreignObject>
		</svg>
	);
});

ButtonRoot.propTypes = {
	children: PropTypes.node,
};

const blue = {
	50: "#ffffff",
	100: "#d6eece",
	200: "#abdd9d",
	400: "#48b83b",
	500: "#48b83b",
	600: "#119811",
	800: "#047a04",
	900: "#006b00",
};

const CustomButtonRoot = styled(ButtonRoot)(
	({ theme, disabled, inverted, center }) => `
    overflow: visible;
    cursor: pointer;
    --main-color: ${theme.palette.mode === "light" ? blue[600] : blue[100]};
    --hover-color: ${theme.palette.mode === "light" ? blue[50] : blue[900]};
    --active-color: ${theme.palette.mode === "light" ? blue[100] : blue[800]};
  
    & polygon {
      fill: transparent;
      transition: all 800ms ease;
      pointer-events: none;
    }
    
    & .bg {
      stroke: ${inverted ? "grey" : "var(--main-color)"} ;
      stroke-width: 1;
      fill: ${inverted ? "white" : "#119811"};
    }
  
    & .borderEffect {
    //   stroke: #abdd9d;
    //   stroke-width: 2;
    //   stroke-dasharray: 50 600;
    //   stroke-dashoffset: 50;
    //   fill: transparent;
    }
  
    &:hover,
    &.${buttonUnstyledClasses.focusVisible} {
      .borderEffect {
        stroke-dashoffset: -600;
      }
      .bg {
        fill: ${inverted ? "white" : "#119811"};
      }
    }
  
    &:focus,
    &.${buttonUnstyledClasses.focusVisible} {
      outline: 0px solid green; 
      outline-offset: 0px;
    }
  
    &.${buttonUnstyledClasses.active} { 
      & .bg {
        fill: ${disabled ? "green" : "var(--active-color)"} ;
        transition: fill 300ms ease-out;
      }
      & .content {
          color: #119811
      }
    }
  
    & foreignObject {
      pointer-events: none;
  
      & .content {
        font-size:1.5rem;
        font-family: IBM Plex Sans, sans-serif;
        font-weight: 500;
        line-height: 1.5;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: ${inverted ? "#119811" : "rgb(231, 231, 231)"} ;
        text-transform: uppercase;
      }
  
      & svg {
        margin: 0 5px;
      }
    }`
);

const SvgButton = React.forwardRef(function SvgButton(props, ref) {
	return <ButtonUnstyled {...props} component={CustomButtonRoot} ref={ref} />;
});

const CartButton = ({ children, ...others }) => {
	return <SvgButton {...others}>{children}</SvgButton>;
};

const TripleButton = ({
	item,
	addItemToCart,
	removeItemFromCart,
	cartItem,
	inverted,
}) => {
	const handleAdd = e => {
		e.stopPropagation();
		addItemToCart(item);
	};

	const handleRemove = e => {
		e.stopPropagation();
		removeItemFromCart(item);
	};

	return (
		<div className='triple-button-con disable-select'>
			<CartButton inverted={inverted} onClick={handleRemove}>
				-
			</CartButton>
			<CartButton
				center='noBorder'
				inverted={inverted}
				disabled
				onClick={e => e.stopPropagation()}>
				{cartItem.quantity}
			</CartButton>
			<CartButton inverted={inverted} onClick={handleAdd}>
				+
			</CartButton>
		</div>
	);
};

export default connect(null, {
	addItemToCart,
	removeItemFromCart,
})(TripleButton);
