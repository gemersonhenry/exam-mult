const fs = require('fs');

const promise = new Promise((resolve, reject) => {
  fs.readFile('config.json', 'utf8', function (err, data) {
    if (err) reject(err);
    resolve(data)
  });
})

promise.then((result) => {
  console.log(result);
}).catch((err) => {
  console.log(err);
})