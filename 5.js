class Guerrero {
  constructor(hability, breed){
    this.hability = hability;
    this.breed = breed;
  }
}

class Protoss extends Guerrero {
  constructor() {
    super('volar', 'Protos');
  }
}

class Terran extends Guerrero {
  constructor() {
    super('correr', 'Terran');
  }
}

class Zerg extends Guerrero {
  constructor() {
    super('nadar', 'Zerg');
  }
}

class CustomBreed1 extends Terran {
  constructor() {
    super();
    this.additionalHability = 'saltar';
  }
}

class CustomBreed2 extends Zerg {
  constructor() {
    super();
    this.additionalHability = 'girar';
  }
}

const protos = new Protoss();
console.log('protos: ', protos);
const terran = new Terran();
console.log('terran: ', terran);
const zerg = new Zerg();
console.log('zerg: ', zerg);
const custom1 = new CustomBreed1();
console.log('custom1: ', custom1);
const custom2 = new CustomBreed2();
console.log('custom2: ', custom2);