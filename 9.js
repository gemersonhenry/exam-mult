const PLACA = {
  marca: {
    name: 'Honda',
    modelo: {
      name: 'CR-V'
    }
  },
  description: {
    text: 'carro nuevo',
  },
  pais: 'Peru'
}

const DEFAULT_MESSAGE = 'no existe modelo';

function getModelo(placaObj) {
  const keysArr = Object.keys(placaObj);
  if (keysArr.length === 0) {
    return DEFAULT_MESSAGE;
  }
  if (keysArr.includes('modelo')) {
    const modeloName = placaObj['modelo']['name'];
    return modeloName ? modeloName : DEFAULT_MESSAGE;
  }
  const newKeysArr = keysArr.filter((key) => typeof(placaObj[key]) === 'object');
  if (newKeysArr.length === 0) {
    return DEFAULT_MESSAGE;
  }
  let newPlacaObj = {};
  newKeysArr.forEach((key) => newPlacaObj = { ...newPlacaObj, ...placaObj[key]});
  return getModelo(newPlacaObj);
}

const modelo = getModelo(PLACA);
console.log('El modelo es: ', modelo);