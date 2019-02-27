const arrPersonas = [
  {
    name: 'Pepe',
    donacion: true,
    esposas: ['Rosangela', 'Mayte'],
  },
  {
    name: 'Juan',
    donacion: false,
    esposas: ['Yahaira'],
  },
  {
    name: 'Lalo',
    donacion: true,
    esposas: [],
  }
]

function getPerson(index) {
  if (isValidIndex(index)) {
    const person = {...arrPersonas[index]};
    person.name = 'choy';
    return person;
  }
  return 'La posición ingresada no existe';
}

function isValidIndex(index) {
  return index >= 0 && index < arrPersonas.length;
}

const person = getPerson(1);
console.log('person: ', person);
console.log('people: ', arrPersonas);
