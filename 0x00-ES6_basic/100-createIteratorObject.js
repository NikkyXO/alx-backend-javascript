export default function createIteratorObject(report) {
  let employeesList = [];

  for (const employee of Object.values(report.allEmployees)) {
    employeesList = [...employeesList, ...employee];
  }
  return employeesList;
}
