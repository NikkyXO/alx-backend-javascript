export default function setFromArray(...args) {
  const newSet = new Set(...args);
  return newSet;
}
