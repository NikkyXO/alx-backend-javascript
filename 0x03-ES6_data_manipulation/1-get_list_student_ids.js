export default function getListStudentIds(arrayOfObjs) {
  const isAnarray = arrayOfObjs instanceof Array;
  const numbers = [];

  if (isAnarray === true) {
    arrayOfObjs.forEach((arrayOfObj) => numbers.push(arrayOfObj.id));
  }
  return numbers;
}
