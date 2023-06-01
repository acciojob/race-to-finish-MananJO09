    window.promises = [];
    const res = document.getElementById("output");
    for (let i = 0; i < 5; i++) {
      const time = Math.floor(Math.random() * 5) + 1;
      promises.push(
        new Promise((resolve) => {
          setTimeout(() => {
            resolve(time);
          }, time * 1000);
        })
      );
    }
    Promise.any(promises).then((result) => {
      res.innerText = result;
    });