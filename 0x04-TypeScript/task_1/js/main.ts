interface Teacher {
	readonly firstName: string;
	readonly lastName: string;
	yearsOfExperience?: number;
	fullTimeEmployee: boolean;
	location: string;
	[propName: string]: any;
}

const teacher1: Teacher = {
	firstName: "John",
	fullTimeEmployee: false,
	lastName: "Doe",
	location: "London",
	contract: false
};

console.log(teacher1);

interface Directors extends Teacher {
	numberOfReports: number;
}
const director1: Directors = {
	firstName: "John",
	lastName: "Doe",
	location: "London",
	fullTimeEmployee: true,
	numberOfReports: 17
};
console.log(director1);



function printTeacher(firstName: string, lastName: string) {
	return firstName[0] + ". " + lastName;
}


interface classStudent {
	firstName: string;
	lastName: string;
}

class StudentClass {
	firstName: string;
	lastName: string;

	constructor(firstName: string, lastName: string) {
		this.firstName = firstName;
		this.lastName = lastName;
	}

	workOnHomework(): string {
		return "Currently working";
	}
	displayName(): string {
		return `${this.firstName}`;
	}
}

const student4: classStudent = new StudentClass("Eddie", "Murphy");

