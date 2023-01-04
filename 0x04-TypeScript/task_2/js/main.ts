interface DirectorInterface {

	workFromHome(): string,

	getCoffeeBreak(): string,

	workDirectorTasks(): string

}


interface TeacherInterface {
	workFromHome(): string;

	getCoffeeBreak(): string;

	workTeacherTasks(): string;
}

class Teacher implements TeacherInterface {
	constructor() {}

	getCoffeeBreak(): string {
		return "Cannot have a break";
	}
	workTeacherTasks(): string {
		return "Getting to work";
	}
	workFromHome(): string {
		return "Cannot work from home";
	}
}

class Director implements DirectorInterface {
	constructor() {}

	getCoffeeBreak(): string {
		return "Not implemented here yet";
	}
	workDirectorTasks(): string {
		return "Getting to director tasks";
	}
	workFromHome(): string {
		return "Working from home";
	}
	getToWork(): string {
		return "Getting a coffee break";
	}
}

function createEmployee(salary: (number | string)){
	if (typeof salary == "number" && salary < 500) {
		return new Teacher();
	} else {
		return new Director();
	}
	
}

function isDirector(employee: Director | Teacher): employee is Director {
	return (employee as Director) !== undefined;
}

function executeWorke(employee: Director | Teacher) {
	
	return (employee instanceof Director) ? employee.workDirectorTasks() : employee.workTeacherTasks();
}


type Subjects = "Math" | "History";



function teachClass(todayClass: Subjects) {
	return (todayClass === "Math") ? "Teaching Math" : "Teaching History";
}