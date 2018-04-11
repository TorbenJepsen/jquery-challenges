/*
  HARD MODE: Display all of the pets on the page.

  PRO MODE: Add an input field that allows users
  to add new pets from the index page.

  PRO MODE #2: Add a button that clears out the
  list of pets.
*/

class Pet {
  constructor(nameIn, typeIn, ageIn) {
    this.name = nameIn;
    this.age = ageIn;
    this.type = typeIn;
  }
}

// Feel free to add more data here
const petOne = new Pet('Charlie', 'dog', 6);
const petTwo = new Pet('Thorin', 'rabbit', 4);
const petThree = new Pet('Cedar', 'dog', 7);
const petFour = new Pet('Juniper', 'cat', 3);

const pets = [petOne, petTwo, petThree, petFour];

$(readyNow); // Shorthand for $(document).ready(readyNow);

function readyNow(){
  appendDom();
}

function appendDom(){
  // Create a header
  let header = $('<h1>List of Pets - Loop and Append</h1>');
  $('.container').append(header);

  let table = $('<table></table>');
  table.append('<thead><tr><th>Name</th><th>Type</th><th>Age</th></thead>');

  let tbody = $('<tbody id="tableBody"></tbody>');
  table.append(tbody);

  $('.container').append(table);

  // YOUR CODE HERE

  // Display each of the pets on the DOM.

}
