export const addingItemToaCart = (cart, newItem) => {
	const exists = cart.find(el => el.name === newItem.name);
	if (exists) {
		return cart.map(item => {
			if (item.name === newItem.name) {
				return {
					...item,
					quantity: item.quantity + 1,
				};
			}
			return item;
		});
	}

	return [...cart, { ...newItem, quantity: 1 }];
};

export const removingItemFromaCart = (cart, removeItem) => {
	const exists = cart.find(el => el.name === removeItem.name);

	if (exists.quantity === 1) {
		return cart.filter(el => el.name !== removeItem.name);
	}

	return cart.map(item => {
		if (item.name === removeItem.name) {
			return { ...item, quantity: item.quantity - 1 };
		}
		return item;
	});
};

export const removeItem = (cart, removeItem) => {
	return cart.filter(item => item.name !== removeItem.name);
};
