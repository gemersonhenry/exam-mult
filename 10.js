const PEOPLE_ARR = [
  {
    name: 'Pepe',
    donacion: true,
    esposas: ['Rosangela', 'Mayte']
  },
  {
    name: 'Juan',
    donacion: true,
    esposas: ['Yahaira']
  },
  {
    name: 'Lalo',
    donacion: false,
    esposas: []
  }
]

function filterByConditions(people) {
  return people.filter(getIndicatedPerson);
}

function getIndicatedPerson(person) {
  const firtsLetters = person.esposas.map((wife) => wife.charAt(0))

  const isDonor = person.donacion;
  const hasWifes = person.esposas.length > 0;
  const nameCondition = firtsLetters.includes('Y');
  return isDonor && hasWifes && nameCondition;
}

const people = filterByConditions(PEOPLE_ARR);
console.log(people);
  