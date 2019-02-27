const PEOPLE_ARRAY = [
  { name: 'Gemerson', edad: 32 },
  { name: 'Juan', edad: 25 },
  { name: 'Pepe', edad: 13 },
  { name: 'Raul', edad: 45 },
  { name: 'Maria', edad: 24 },
  { name: 'Meybi', edad: 23 },
  { name: 'Nelida', edad: 30 },
  { name: 'Carlos', edad: 28 },
  { name: 'Robert', edad: 28 },
  { name: 'Lucia', edad: 24 },
]

function functionName(arr, ...numbers) {
  return arr.filter((person) => {
    return numbers.includes(person.edad);
  })
}

const people = functionName(PEOPLE_ARRAY, 24, 32, 28);
console.log('people: ', people);