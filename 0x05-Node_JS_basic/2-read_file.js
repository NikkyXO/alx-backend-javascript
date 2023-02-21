const fs = require("fs");

function countStudents(path) {
	try {
		//  reads file synchronously
		const data = fs.readFileSync(path, "utf8");

		// the filter() method to remove any empty lines from the array.
		const lines = data.split("\n").filter((line) => line);

		// and shifts the first line
		//(which contains the headers) into an array of  headers
		const headers = lines.shift().split(",");

		const fields = {};
		let total = 0;
		for (const header of headers) {
			fields[header] = [];
		}

		for (const line of lines) {
			const values = line.split(",");
			if (values.length !== headers.length) {
				throw new Error("Invalid format");
			}
			total++;
			for (let i = 0; i < headers.length; i++) {
				const header = headers[i];
				const value = values[i].trim();
				if (header === "firstname" && !value) {
					throw new Error("Invalid format");
				}
				fields[header].push(value);
			}
		}
		console.log(`Number of students: ${total}`);
		for (const header of headers) {
			const values = fields[header];
			const count = values.filter((value) => value).length;
			const list = values.filter((value) => value).join(", ");
			console.log(
				`Number of students in ${header}: ${count}. List: ${list}`
			);
		}
	} catch (err) {
		console.error(`Cannot load the database: ${err.message}`);
	}
}


module.exports = countStudents;