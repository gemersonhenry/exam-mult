const fs = require('fs');

function customFetch(file) {
  return new Promise((resolve, reject) => {
    fs.readFile(file, 'utf8', function (err, data) {
      if (err) reject(err);
      resolve(JSON.parse(data))
    });
  })
}

function getPlaca(nroPlaca) {
  return customFetch('placa.json');
}

function getConductor(dniConductor) {
  return customFetch('conductor.json');
}

function logErrorMessage(err) {
  console.log(`${new Date()} - error: ${err}`)
}

function exec() {
  getPlaca('69XX-77').then((response) => {
    const keyArr = Object.keys(response);
    if (keyArr.includes('dniConductor')) {
      const { dniConductor } = response;
      getConductor(dniConductor).then((response) => {
        console.log(response);
      }).catch(logErrorMessage)
    } else {
      logErrorMessage('propiedad "dniConductor" no existe');
    }
  }).catch(logErrorMessage)
}

exec();