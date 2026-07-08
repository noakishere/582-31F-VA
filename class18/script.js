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
