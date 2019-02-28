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
  if (!arrPersonas[index]) {
    return 'La posición ingresada no existe';
  }
  const person = {...arrPersonas[index]};
  person.name = 'choy';
  return person;
}

const person = getPerson(1);
console.log('person: ', person);
console.log('people: ', arrPersonas);
