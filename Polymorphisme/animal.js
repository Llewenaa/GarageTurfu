class Animal {
  constructor(nom) {
    this.nom = nom;
  }

  faireDuBruit() {
    console.log(`${this.nom} fait un bruit générique.`);
  }
}

class Chien extends Animal {
  faireDuBruit() {
    console.log(`${this.nom} aboie !`);
  }
}

class Chat extends Animal {
  faireDuBruit() {
    console.log(`${this.nom} miaule !`);
  }
}

export { Animal, Chien, Chat };