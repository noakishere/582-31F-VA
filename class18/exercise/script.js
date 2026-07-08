const players = [
  { name: "Messi", country: "Argentina", number: 10 },
  { name: "Mbappé", country: "France", number: 10 },
  { name: "Endo", country: "Japan", number: 6 },
];

const output = document.getElementById("players-container");

// We use helper functions to be able to reuse them
// and structure and design our code in a meaningful way!
function createPlayerCard(player) {
  const playerTemplate = document.getElementById("player");
  const clone = playerTemplate.content.cloneNode(true);

  clone.querySelector(".player-name").textContent = player.name;

  clone.querySelector(".country-name").textContent =
    `Country: ${player.country}`;

  clone.querySelector(".player-number").textContent =
    `Number: ${player.number}`;

  return clone;
}

players.forEach((player) => {
  const newPlayer = createPlayerCard(player);

  output.appendChild(newPlayer);
});
