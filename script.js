function getRandomTime(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function createPromise() {
  return new Promise((resolve) => {
    const randomTime = getRandomTime(1000, 5000);
    setTimeout(() => {
      resolve(randomTime);
    }, randomTime);
  });
}

Promise.any(promises)
  .then((result) => {
    const outputDiv = document.getElementById("output");
    outputDiv.innerHTML = `The first promise resolved in ${result} milliseconds.`;
  })
  .catch((error) => {
    console.error("An error occurred:", error);
  });
