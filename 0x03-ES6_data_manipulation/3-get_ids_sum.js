export default function getStudentIdsSum(listsOfstudentObjs) {
  return listsOfstudentObjs.reduce((prev, next) => prev + next.id, 0);
}
