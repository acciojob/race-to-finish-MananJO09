cy.window().then(win => {
  // ...
	function getRandomTime(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
  const promises = win.promises.map(
	function createPromise() {
  return new Promise((resolve) => {
    const randomTime = getRandomTime(1000, 5000);
    setTimeout(() => {
      resolve(randomTime);
    }, randomTime);
  });
});

// Move the Promise.any() call here, outside the cy.window().then() block
Promise.any(promises)
  .then((result) => {
    const outputDiv = document.getElementById("output");
    outputDiv.innerHTML = `The first promise resolved in ${result} milliseconds.`;
  })
  .catch((error) => {
    console.error("An error occurred:", error);
  });
}


