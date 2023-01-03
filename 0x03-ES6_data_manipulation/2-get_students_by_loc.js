export default function getStudentsByLocation(listOfStudentsObj, city) {
  return listOfStudentsObj.filter((obj) => obj.location === city);
}
