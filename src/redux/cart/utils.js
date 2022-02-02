export const addingItemToaCart = (cart, newItem) => {
	const check = cart.find(el => el.name === newItem.name);
	const filtering = cart.filter(el => el.name !== newItem.name);

	if (check) {
		return [...filtering, { ...newItem, quantity: check.quantity + 1 }];
	}

	return [...cart, { ...newItem, quantity: 1 }];
};

export const removingItemFromaCart = (cart, removeItem) => {
	const check = cart.find(el => el.name === removeItem.name);
	const filtering = cart.filter(el => el.name !== removeItem.name);

	if (check.quantity === 1) {
		return [...filtering];
	}

	return [...filtering, { ...removeItem, quantity: check.quantity - 1 }];
};

export const getTotalPrice = cart => {
	const price = cart.reduce((acc, el) => acc + el.price * el.quantity, 0);
	console.log(cart, price);
	return price;
};
