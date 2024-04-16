import { expect, test } from "vitest";
import { sum, Ship, Gameboard } from "./battleship";

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

test("Create a ship with a length", () => {
  const ship = new Ship(5);
  expect(ship.length).toBe(5);
});
