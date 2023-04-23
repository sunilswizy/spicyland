import React from "react";
import "./error-boundary.styles.scss";
import { withRouter } from "react-router-dom";

class ErrorBoundary extends React.Component {
	constructor(props) {
		super(props);
		this.state = { hasError: false };
	}

	static getDerivedStateFromError(error) {
		// Update state so the next render will show the fallback UI.
		return { hasError: true };
	}

	componentDidCatch(error, errorInfo) {
		// You can also log the error to an error reporting service
	}

	render() {
		if (this.state.hasError) {
			return (
				<div className='parent disable-select'>
					<div className='box-parent'>
						<div className='scene'>
							<div className='box'>
								<div className='box__face front'>4</div>
								<div className='box__face back'>0</div>
								<div className='box__face right'>4</div>
								<div className='box__face left'>0</div>
								<div className='box__face top'>0</div>
								<div className='box__face bottom'>0</div>
							</div>
							<div className='shadow'></div>
						</div>
					</div>
					<div className='desc'>
						<h2>Ooops page not found!</h2>
						<a href='/'>BACK TO HOME PAGE</a>
					</div>
				</div>
			);
		}

		return this.props.children;
	}
}

export default withRouter(ErrorBoundary);
