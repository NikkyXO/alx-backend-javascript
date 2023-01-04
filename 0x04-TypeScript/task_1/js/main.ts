interface Teacher {
	readonly firstName: string;
	readonly lastName: string;
	yearsOfExperience?: number;
	fullTimeEmployee: boolean;
	location: string;
	contract?: boolean;
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


// let printTeacher: Teacher;
// Write an interface for the function named printTeacherFunction.


function printTeacher(firstName: string, lastName: string) {
	return firstName[0] + ". " + lastName;
}


// The constructor of the class should be described through an Interface
// The class should be described through an Interface

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

