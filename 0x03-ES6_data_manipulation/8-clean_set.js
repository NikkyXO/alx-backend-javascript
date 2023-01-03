export default function cleanSet(set, startString) {
  const results = [];

  if (startString === '' || typeof startString !== 'string') return '';

  set.forEach((val) => {
    if (typeof val === 'string' && val.startsWith(startString)) {
      results.push(val.slice(startString.length));
    }
  });
  return results.join('-');
}
