const CASES = {
  'code1': 'liminada',
  'code2': 'fanta',
  'code3': 'cerveza',
  'code4': 'kerosene',
  'code5': 'gasolina',
  'code6': 'chicharra',
  'code7': 'pisco',
  'code8': 'punto g',
  'code9': 'ron',
  'code10': 'leche',
  'code11': 'quaker',
  'code12': 'guarana',
};
const DEFAULT_DRINK = 'agua de jamaica';

function logMessage(drinkCode) {
  const codeArray = Object.keys(CASES);
  const isThereDrinkCode = codeArray.includes(drinkCode);
  const drink = isThereDrinkCode ? CASES[drinkCode] : DEFAULT_DRINK;
  console.log(`Estoy tomando ${drink}`);
}

console.log('code 1');
logMessage('code1');

console.log('code 6');
logMessage('code6');

console.log('code 12');
logMessage('code12');

console.log('code que no existe');
logMessage('codeN');
