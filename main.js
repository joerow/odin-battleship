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

message.textContent = "new message";
