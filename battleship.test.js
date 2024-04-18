import { expect, test } from "vitest";
import { sum, Ship, Gameboard } from "./battleship";

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

test("Create a ship with a length", () => {
  const ship = new Ship(5);
  expect(ship.length).toBe(5);
});

test("Hit a ship twice and not sink it", () => {
  const ship = new Ship(5);
  ship.hit();
  ship.hit();
  expect(ship.times_hit).toBe(2);
  expect(ship.isSunk()).toBe(false);
});

test("Sink a ship", () => {
  const ship = new Ship(2);
  ship.hit();
  ship.hit();
  expect(ship.times_hit).toBe(2);
  expect(ship.isSunk()).toBe(true);
});

test("create a gameboard", () => {
  const board = new Gameboard();
  board.all_valid_coordinates();
});

test("test a valid coordinate", () => {
  const board = new Gameboard();
  let coordinate = { x: 1, y: 2 };
  expect(board.is_valid_coordinate(coordinate)).toBe(true);
});

test("test an invalid coordinate", () => {
  const board = new Gameboard();
  let coordinate = { x: 1, y: 12 };
  expect(board.is_valid_coordinate(coordinate)).toBe(false);
});

// test("place a valid horizontal ship", () => {
//   const board = new Gameboard();
//   let coordinate = { x: 0, y: 1 };
//   board.place_ship(3, coordinate, "horizontal");
// });
