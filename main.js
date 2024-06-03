import { Player } from "./battleship";
import { buildElement } from "./domhandler";

let app = document.querySelector("#app");

let title = buildElement("div", "title", "", "BATTLESHIP");
app.appendChild(title);

let message = buildElement(
  "div",
  "message",
  "",
  "This is the message area. There will be changing instructions here"
);
app.appendChild(message);

message.textContent = "Let's play";

let newGame = buildElement("button", "new-game", "", "new game");
app.appendChild(newGame);

newGame.onclick = function () {
  let p1 = new Player("User", 1);
  let p2 = new Player("CPU", 2);
  newGame.style.display = "none";
  message.textContent = "Let's go";
  let gameboards = buildElement("div", "gameboards", "", "");
  app.appendChild(gameboards);
  let p1Gameboard = buildElement("div", "p1-gameboard", "", "");
  for (let i = 0; i < p1.gameboard.size; i++) {
    for (let j = 0; j < p1.gameboard.size; j++) {
      let gameboardTile = buildElement(
        "button",
        "x" + i + "y" + j,
        "gameboard-button",
        "X"
      );
      p1Gameboard.appendChild(gameboardTile);
    }
  }
  gameboards.appendChild(p1Gameboard);
};
