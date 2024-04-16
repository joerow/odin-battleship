export class Ship {
  constructor(length) {
    this.length = length;
    let times_hit = 0;
  }

  hit() {
    this.times_hit += 1;
  }

  isSunk() {
    return this.times_hit >= this.length ? true : false;
  }
}

export class Gameboard {
  constructor() {}

  hit() {
    this.times_hit += 1;
  }

  isSunk() {
    return this.times_hit >= this.length ? true : false;
  }
}

export function sum(a, b) {
  return a + b;
}
