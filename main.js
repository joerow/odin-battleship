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
};
