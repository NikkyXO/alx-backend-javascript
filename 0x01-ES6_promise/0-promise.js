export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    /* eslint-disable no-constant-condition */
    if (true) {
      resolve(true);
    } else {
      reject(Error('false'));
    }
  });
}
