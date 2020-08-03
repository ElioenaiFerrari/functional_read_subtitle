const data = new Promise((resolve, reject) => {
  setTimeout(() => resolve(3), 3000)
});


data.then(val => console.log(val))