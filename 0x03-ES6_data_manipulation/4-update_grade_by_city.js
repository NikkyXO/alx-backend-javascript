export default function updateStudentGradeByCity(listOfStudntsObjs, city, newGrades) {
  return listOfStudntsObjs.filter((student) => student.location === city)
    .map((studentObj) => {
		const checkgrade = newGrades.find(
			(obj) => obj.studentId === studentObj.id
		);
		/* eslint-disable no-param-reassign */
		if (checkgrade) {
			studentObj.grade = checkgrade.grade;
		} else {
			studentObj.grade = "N/A";
		}
		/* eslint-disable no-param-reassign */
		return studentObj;
	});
}
