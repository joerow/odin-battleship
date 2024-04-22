import { expect, test } from "vitest";
import { Ship, Gameboard } from "./battleship";

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

test("place a valid horizontal ship", () => {
  const board = new Gameboard();
  let coordinate = { x: 1, y: 1 };
  board.place_ship(3, coordinate, "horizontal");
});

test("place an invalid horizontal ship - expect ship overlap error", () => {
  const board = new Gameboard();
  let coordinate = { x: 0, y: 1 };
  let coordinate2 = { x: 2, y: 1 };
  board.place_ship(3, coordinate, "horizontal");
  // expect error "would cause ship overlap"
  expect(() => board.place_ship(3, coordinate2, "horizontal")).toThrowError(
    "would cause ship overlap"
  );
});

test("place an invalid horizontal ship - expect ship exceeds gameboard", () => {
  const board = new Gameboard();
  let coordinate = { x: 9, y: 1 };
  // expect error "would cause ship overlap"
  expect(() => board.place_ship(3, coordinate, "horizontal")).toThrowError(
    "not a valid placement: exceeds gameboard"
  );
});

test("place an invalid vertical ship - expect ship exceeds gameboard", () => {
  const board = new Gameboard();
  let coordinate = { x: 1, y: 9 };
  // expect error "would cause ship overlap"
  expect(() => board.place_ship(3, coordinate, "vertical")).toThrowError(
    "not a valid placement: exceeds gameboard"
  );
});

test("hit a ship place on the board", () => {
  const board = new Gameboard();
  let coordinate = { x: 0, y: 1 };
  let coordinate2 = { x: 5, y: 1 };
  let miss_coordinate = { x: 7, y: 1 };
  board.place_ship(3, coordinate, "horizontal");
  board.place_ship(2, coordinate2, "horizontal");
  board.receive_attack(coordinate);
  board.receive_attack(miss_coordinate);
  expect(board.ships_on_gameboard[0].times_hit).toBe(1);
});
