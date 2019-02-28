function myPromise(delayTime) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return reject('La promesa se demoró');
    }, 3001);
    // Aquí se reemplazaria el 'settimeout' por una peticion, etc. - START
    setTimeout(() => {
      return resolve('Promesa resuelta');
    }, delayTime);
    // END
  });
}

function runMyPromise(delayTime) {
  myPromise(delayTime*1000).then((message) => {
    console.log(message);
  }, (errMessage) => {
    console.log(errMessage);
  })
}

runMyPromise(2.999);
runMyPromise(3);
