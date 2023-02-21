const fs = require("fs");
const util = require("util");

const readFileAsync = util.promisify(fs.readFile);

function countStudents(path) {
	return readFileAsync(path, "utf8")
		.then((data) => {
			const lines = data
				.trim()
				.split("\n")
				.filter((line) => line);
			const header = lines.shift().split(",");
			const counts = {};
			lines.forEach((line) => {
				const fields = line.split(",");

				fields.forEach((field, i) => {
					if (i === 0) {
						if (counts[field]) {
							counts[field] += 1;
						} else {
							counts[field] = 1;
						}
					}
				});
			});
			console.log(`Number of students: ${lines.length}`);
			for (const field in counts) {
				console.log(
					`Number of students in ${field}: ${
						counts[field]
					}. List: ${lines
						.filter((line) => line.split(",")[0] === field)
						.map((line) => line.split(",")[1])
						.join(", ")}`
				);
			}
			return counts;
		})
		.catch((error) => {
			throw new Error("Cannot load the database");
		});
}
