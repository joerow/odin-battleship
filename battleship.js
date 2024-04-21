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
    this.size = 10;
    this.coordinates = [];
    for (let i = 0; i < this.size; i++) {
      for (let j = 0; j < this.size; j++) {
        this.coordinates.push({ x: i, y: j });
      }
    }
    this.ship_coordinates = [];
  }

  all_valid_coordinates() {
    return this.coordinates;
  }

  is_valid_coordinate({ x, y }) {
    // Use find method to check if the coordinates exist in the array
    return (
      this.coordinates.find((coord) => coord.x === x && coord.y === y) !==
      undefined
    );
  }

  is_ship_coordinate({ x, y }) {
    // Use find method to check if the coordinates exist in the array
    return (
      this.ship_coordinates.find((coord) => coord.x === x && coord.y === y) !==
      undefined
    );
  }

  place_ship(ship_length, ship_start, orientation) {
    try {
      // check if the ship start location is valid
      if (!this.is_valid_coordinate(ship_start)) {
        throw "not a valid starting coordinate";
      }

      // check if all ship locations are valid for orientation
      let ship_pieces = [];

      // generate the horizontal ship pieces
      switch (orientation) {
        case "horizontal":
          for (let index = 0; index < ship_length; index++) {
            let ship_part = { x: ship_start.x + index, y: ship_start.y };
            ship_pieces.push(ship_part);
          }
          break;
        // generate the vertical ship pieces
        case "vertical":
          for (let index = 0; index < ship_length; index++) {
            let ship_part = { x: ship_start.x, y: ship_start.y + index };
            ship_pieces.push(ship_part);
          }
        default:
          break;
      }

      // check if any ship pieces would be invalid
      ship_pieces.forEach((ship_part) => {
        try {
          if (!this.is_valid_coordinate(ship_part)) {
            throw new Error("not a valid placement: exceeds gameboard");
          }
          if (this.is_ship_coordinate(ship_part)) {
            console.log("inner:");
            throw new Error("would cause ship overlap");
          }
        } catch (Error) {
          throw Error;
        }
      });

      //store the ship pieces in the gameboard
      ship_pieces.forEach((ship_part) => {
        this.ship_coordinates.push(ship_part);
      });
    } catch (Error) {
      throw Error;
    }
  }
}
