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

const promises = [];
for (let i = 0; i < 5; i++) {
  promises.push(createPromise());
}

Promise.any(promises)
  .then((result) => {
    const outputDiv = document.getElementById('output');
    outputDiv.innerText = `The first promise resolved with ${result} milliseconds.`;
  })
  .catch((error) => {
    console.error(error);
  });
