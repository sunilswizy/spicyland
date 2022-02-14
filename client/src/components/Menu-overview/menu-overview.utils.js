export const getRandItems = items => {
	let randItems = [];

	while (randItems.length !== 4) {
		let rand = items[Math.floor(Math.random() * items.length)];
		const check = randItems.find(el => el.name === rand.name);
		if (!check) {
			randItems.push(rand);
		}
	}

	return randItems;
};
