const express = require("express");
const path = require("path");
const cors = require("cors");
const nodemailer = require("nodemailer");

if (process.env.NODE_ENV !== "production") require("dotenv").config();

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// function fullUrl(req) {
// 	return url.format({
// 		protocol: req.protocol,
// 		host: req.get("host"),
// 		pathname: req.originalUrl,
// 	});
// }

if (process.env.NODE_ENV === "production") {
	app.use(express.static(path.join(__dirname, "client/build")));

	app.get("*", function (req, res) {
		res.sendFile(path.join(__dirname, "client/build", "index.html"));
	});
}

app.listen(port, error => {
	if (error) throw error;
	console.log(`land is drop on http://localhost/${port}`);
});

app.post("/send-mail", (req, res) => {
	const fromEmail = process.env.EMAIL;

	const id = req.body.token.id;
	const email = req.body.token.email;
	const brand = req.body.token.card.brand;
	const price = req.body.price;
	const guests = req.body.guests;
	const reservedTime = req.body.reservedTime;
	console.log("fads");

	console.log(id, email, brand, price, guests, reservedTime);

	const transporter = nodemailer.createTransport({
		service: "gmail",
		auth: {
			user: fromEmail,
			pass: process.env.PASSWORD,
		},
	});

	const mailOptions = {
		from: fromEmail,
		to: email,
		subject: "Dining Reserved Successfully!",
		html: `<h1 style="color: #ee536d;">DINNING RESERVED SUCCESSFULLY!</h1> <div><h4 style="color: #ee536d;"><b> Time</b></h4><p>${reservedTime}</p></div><div>	<h4 style="color: #ee536d;"><b> Party</b></h4>	<p>${guests} Guests</p></div><div>	<h4 style="color: #ee536d;"><b> Price</b></h4>	<p>$ ${price}</p></div><div>	<h4 style="color: #ee536d;"><b> Menu</b></h4>	<p> Juices, Biriyani, Pizza</p></div> <div><h4 style="color: #ee536d;"><b> Address</b></h4> <p>22/23, Kovaiputhur Road, Coimbatore , Coimbatore - 600017</p></div> <div>	<h4 style="color: #ee536d;"><b> Cancellation Policy</b></h4>	<p>While you won't be charged if you need to cancel, we ask that you do so at least 24 hours in advance.</p></div><div>	<h1 style="color: #ee536d;"><b> SpicylanD!</b></h1>	<p>spicyland, a land of spicy items!</p></div>`,
	};

	transporter.sendMail(mailOptions, function (error, info) {
		if (error) {
			console.log(error);
		} else {
			console.log("Email sent: " + info.response);
		}
	});
});

app.post("/create-checkout-session", async (req, res) => {
	try {
		const session = await stripe.checkout.sessions.create({
			payment_method_types: ["card"],
			shipping_address_collection: {
				allowed_countries: ["IN"],
			},
			shipping_options: [
				{
					shipping_rate_data: {
						type: "fixed_amount",
						fixed_amount: {
							amount: 2800,
							currency: "inr",
						},
						display_name: "fast shipping",
						delivery_estimate: {
							minimum: {
								unit: "hour",
								value: 1,
							},
							maximum: {
								unit: "hour",
								value: 2,
							},
						},
					},
				},
			],
			line_items: req.body.items,
			phone_number_collection: {
				enabled: true,
			},
			mode: "payment",
			allow_promotion_codes: true,
			success_url: `https://spicyland.herokuapp.com/success`,
			cancel_url: `https://spicyland.herokuapp.com/checkout`,
		});
		res.json({ url: session.url });
		console.log(session.url);
	} catch (e) {
		res.status(500).json({ error: e.message });
	}
});
