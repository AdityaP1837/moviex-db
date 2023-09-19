const dateConverter = (date) => {
	let months = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December",
	];
    const newdate = new Date(date)
	const normalDate = `${newdate.getDate()} ${months[newdate.getMonth()]} ${newdate.getFullYear()}`;
	return normalDate;
};

export default dateConverter;
