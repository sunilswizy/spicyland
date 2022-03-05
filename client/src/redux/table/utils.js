import { v4 as uuid } from "uuid";

export const getDayList = () => {
	const currentDay = new Date();
	const weekDay = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
	let daysList = [];

	for (let i = 0; i <= 7; i++) {
		let nextDay = new Date(currentDay);
		nextDay.setDate(currentDay.getDate() + i);
		let dayInWeek = weekDay[nextDay.getDay()];
		let month = nextDay.toString().slice(3, 7);
		let day = nextDay.toString().slice(7, 10);
		daysList.push({
			id: i,
			dayInWeek,
			month,
			day,
			timing: [
				{ table_id: uuid(), time: "11:00", reserved: false, type: "lunch" },
				{ table_id: uuid(), time: "11.30", reserved: false, type: "lunch" },
				{ table_id: uuid(), time: "12:00", reserved: false, type: "lunch" },
				{ table_id: uuid(), time: "12.30", reserved: false, type: "lunch" },
				{ table_id: uuid(), time: "01:00", reserved: false, type: "lunch" },
				{ table_id: uuid(), time: "01.30", reserved: true, type: "lunch" },
				{ table_id: uuid(), time: "04:00", reserved: false, type: "dinner" },
				{ table_id: uuid(), time: "04.30", reserved: false, type: "dinner" },
				{ table_id: uuid(), time: "05:00", reserved: false, type: "dinner" },
				{ table_id: uuid(), time: "05.30", reserved: true, type: "dinner" },
				{ table_id: uuid(), time: "06:00", reserved: false, type: "dinner" },
				{ table_id: uuid(), time: "06.30", reserved: false, type: "dinner" },
				{ table_id: uuid(), time: "07.00", reserved: false, type: "dinner" },
				{ table_id: uuid(), time: "07.30", reserved: false, type: "dinner" },
			],
		});
	}

	return daysList;
};

export const updateTable = (dayList, id, table_id) => {
	const data = dayList.map(list => {
		if (list.id === id) {
			return {
				...list,
				timing: list.timing.map(item =>
					item.table_id === table_id ? { ...item, reserved: true } : item
				),
			};
		}
		return list;
	});

	return data;
};
