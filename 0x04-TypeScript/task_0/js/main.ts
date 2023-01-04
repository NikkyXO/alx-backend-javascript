interface Student {
	firstName: string;
	lastName: string;
	age: number;
	location: string;
}

let student1 = {
	firstName: "John",
	lastName: "doe",
	age: 20,
	location: "NewYork"
}
let student2 = {
	firstName: "Jane",
	lastName: "foreman",
	age: 19,
	location: "london"
};
let studentList: Student[];

studentList = [student1, student2];

let html1 = '<table><tr>';
let html2 = '</tr><tr>';

for (let i = 0; i < studentList.length; i++) {
	html1 += '<td>' + studentList[i].firstName + '</td>';
	html2 += "<td>" + studentList[i].location + "</td>";
}
const html = html1 + html2 + "</tr></table>";
console.log(html);