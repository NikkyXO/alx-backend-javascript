export default function getListStudentIds(arrayOfObjs) {

  if (Array.isArray(arrayOfObjs)) {
    return arrayOfObjs.map((student) => student.id);
  }
  return [];
}
