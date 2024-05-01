import { expect, test } from "vitest";
import { Ship, Gameboard, Player } from "./battleship";

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
  board.place_ship(3, coordinate, "horizontal");
  board.place_ship(2, coordinate2, "horizontal");
  board.receive_attack(coordinate);
  expect(board.ships_on_gameboard[0].times_hit).toBe(1);
});

test("Count missed attacks", () => {
  const board = new Gameboard();
  let coordinate = { x: 0, y: 1 };
  let miss_coordinate1 = { x: 7, y: 1 };
  let miss_coordinate2 = { x: 7, y: 2 };
  board.place_ship(3, coordinate, "horizontal");
  board.receive_attack(miss_coordinate1);
  board.receive_attack(miss_coordinate2);
  expect(board.missed_attacks.length).toBe(2);
});

test("Sink all ships and report", () => {
  const board = new Gameboard();
  let coordinateA1 = { x: 0, y: 1 };
  let coordinateA2 = { x: 1, y: 1 };
  let coordinateB1 = { x: 0, y: 2 };
  let coordinateB2 = { x: 1, y: 2 };
  board.place_ship(2, coordinateA1, "horizontal");
  board.receive_attack(coordinateA1);
  board.receive_attack(coordinateA2);
  board.place_ship(2, coordinateB1, "horizontal");
  board.receive_attack(coordinateB1);
  board.receive_attack(coordinateB2);
  expect(board.all_ships_sunk).toBe(true);
});

test("Remove attack coordinates from future valid moves", () => {
  const board = new Gameboard();
  let coordinate = { x: 0, y: 1 };
  let coordinate2 = { x: 0, y: 0 };
  board.receive_attack(coordinate);
  board.receive_attack(coordinate2);
  expect(board.is_valid_coordinate(coordinate)).toBe(false);
});

test("check player is created with own gameboard", () => {
  const player = new Player("player");
  let coordinate = { x: 0, y: 1 };
  expect(player.gameboard.is_valid_coordinate(coordinate)).toBe(true);
});
