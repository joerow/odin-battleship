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
