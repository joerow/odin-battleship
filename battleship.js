export class Ship {
  constructor(length) {
    this.length = length;
    this.times_hit = 0;
  }

  hit() {
    this.times_hit += 1;
  }

  isSunk() {
    return this.times_hit >= this.length ? true : false;
  }
}

export class Gameboard {
  constructor() {
    this.size = 3;
    this.coordinates = [];
    for (let x = 0; x < this.size; x++) {
      for (let y = 0; y < this.size; y++) {
        this.coordinates.push({ x: x, y: y });
      }
    }
  }

  all_valid_coordinates() {
    console.log(this.coordinates);
  }

  // is_valid_coordinates({ input }) {
  //   console.log(input);
  //   let valid = this.coordinates.includes({ x: x, y: y });
  //   console.log(valid);
  // }
}

export function sum(a, b) {
  return a + b;
}
