function validateParameters(param1, param2) {
  if (!param1 || !param2) {
    return new Error('Se necesitan 2 parametros');
  }
  return `param1: ${param1}, param2: ${param2}`;
}

console.log(validateParameters(5, 4));
console.log(validateParameters(5));
console.log(validateParameters());