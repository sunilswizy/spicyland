import React from "react";
import "./start-page.styles.scss";

import ButtonBox from "../Button-box/button-box.component";

const StartPage = () => {
	return (
		<div
			className='start-page disable-select'
			style={{
				backgroundImage: `url(https://i.ibb.co/PDLB4jf/istockphoto-1179449390-612x612.jpg)`,
			}}>
			<div className='transparent' />
			<div className='transparent-contenet' />
			<div
				className='start-page-details'
				data-aos='zoom-in'
				data-aos-offset='250'
				data-aos-duration='600'>
				<p className='start-page-subheading'>Welcome to land of spicy.</p>

				<h1 className='start-page-heading'>SpicylanD!</h1>
				<div className='start-page-btn-con'>
					<button>COME ON IN, WE'RE OPEN</button>
					{/* <ButtonBox>RESERVE TABLE</ButtonBox> */}
				</div>
			</div>
		</div>
	);
};

export default StartPage;

{
	/* <div className='start-page-details'>
				<h1 className='start-page-heading'>SpicyLand!</h1>
				<p className='start-page-subheading'>A Land of Spicy Items!</p>
				<div className='start-page-btn-con'>
					<ButtonBox>ORDER FOOD</ButtonBox>
					<ButtonBox>RESERVE TABLE</ButtonBox>
				</div>
			</div>

			<div
				id='carouselExampleControls'
				className='startpage-img-con carousel slide'
				data-bs-ride='carousel'
				data-bs-touch='false'>
				<div className='carousel-inner'>
					<div className='carousel-item active  data-bs-interval="1000"'>
						<img
							src='https://i.ibb.co/XskhwSx/photo-2022-01-16-17-27-24.jpg'
							className='startpage-img d-block w-100'
							alt='...'
						/>
					</div>
					<div className='carousel-item'>
						<img
							src='https://i.ibb.co/ZYM6xK7/1.jpg'
							className='startpage-img d-block w-100'
							alt='...'
						/>
					</div>
					<div className='carousel-item'>
						<img
							src='https://i.ibb.co/8dgGp2T/2.jpg'
							className='startpage-img d-block w-100'
							alt='...'
						/>
					</div>
					<div className='carousel-item'>
						<img
							src='https://i.ibb.co/swRzR4q/3.jpg'
							className='startpage-img d-block w-100'
							alt='...'
						/>
					</div>
					<div className='carousel-item'>
						<img
							src='https://i.ibb.co/pXbbxJX/4.jpg'
							className='startpage-img d-block w-100'
							alt='...'
						/>
					</div>
				</div>
				<button
					className='carousel-control-prev hover-img'
					type='button'
					data-bs-target='#carouselExampleControls'
					data-bs-slide='prev'>
					<span
						className='carousel-control-prev-icon'
						aria-hidden='true'></span>
					<span className='visually-hidden'>Previous</span>
				</button>
				<button
					className='carousel-control-next hover-img'
					type='button'
					data-bs-target='#carouselExampleControls'
					data-bs-slide='next'>
					<span
						className='carousel-control-next-icon'
						aria-hidden='true'></span>
					<span className='visually-hidden'>Next</span>
				</button>
			</div> */
}
