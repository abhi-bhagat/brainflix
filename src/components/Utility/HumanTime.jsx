const HumanTime = (prop) => {
	var timeStamp = prop;
	var date = new Date(timeStamp).toLocaleDateString("en-US");

	return date;
};

export default HumanTime;
