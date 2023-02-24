function calculateNumber(type, a, b) {
	switch (type) {
		case "SUM":
			c = Math.round(a) + Math.round(b);
			break;
		case "SUBTRACT":
			c = Math.round(a) - Math.round(b);
			break;
		case "DIVIDE":
			if (Math.round(b) == 0) {
				c = "Error";
			} else {
				c = Math.round(a) / Math.round(b);
				break;
			}
	}
	return c;
}

module.exports = calculateNumber;
