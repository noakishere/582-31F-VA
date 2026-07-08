/**
 * Templates
 * storing reusable HTML structure and cloning when needed
 */

// We build UI with:
//  innerHTML
//  createElement()
//  modules
//  Custom Elements
//  Shadow DOM

// What is a template?

// A <template> is a chunk of HTML stored in the page, but not rendered immediately.

//      it exists in the document
//      but it does not show on the page BY DEFAULT.
//          it is up to JS to clone and insert it afterwards.

// DOM
const template = document.getElementById("message-template");
const output = document.getElementById("output");

// template.content gives access to the content inside the template
// cloneNode makes a deep copy of the template structure
const clone = template.content.cloneNode(true);

// we insert the cloned content into the live DOM
output.appendChild(clone);
// once appendChild is used, the node (in this case clone) is consumed!

/**
 * If we want to do it multiple times, we have to reassign our clone
 */
for (let i = 0; i < 2; i++) {
  const clone = template.content.cloneNode(true);
  output.appendChild(clone);
}

// Templates are designed specifically for reusability.

/**
 * Dynamic template population
 */

// DATA
const teams = [
  { name: "Argentina", group: "A", points: 6 },
  { name: "France", group: "B", points: 4 },
  { name: "Japan", group: "D", points: 5 },
];

// DOM
const teamsContainer = document.getElementById("teams-container");

// Helper function
function createTeamCard(team) {
  // Get the template DOM
  const teamTemplate = document.getElementById("team-template");

  // Get the template clone
  const clone = teamTemplate.content.cloneNode(true);

  // Get the element's textContent to adjust dynamically
  clone.querySelector(".team-name").textContent = team.name;
  clone.querySelector(".team-group").textContent = `Group: ${team.group}`;
  clone.querySelector(".team-points").textContent = `Points: ${team.points}`;

  return clone;
}

// Render our data in HTML
teams.forEach((team) => {
  const newTeam = createTeamCard(team);

  // add to div
  teamsContainer.appendChild(newTeam);
});
