export default function loadBalancer(chinaDownload, USDownload) {
  return Promise.race([chinaDownload, USDownload])
    .then((results) => {
      console.log(results);
    })
    .catch((error) => {
      console.log(error);
    });
}
