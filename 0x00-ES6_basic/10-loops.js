export default function appendToEachArrayValue(array, appendString) {
  const retArray = [];
  for (const element of array) {
    retArray.push(appendString + element);
  }

  return retArray;
}
