/*
  HARD MODE: Display all of the pets on the page.

  PRO MODE: Add an input field that allows users
  to add new pets from the index page.

  PRO MODE #2: Add a button that clears out the
  list of pets.
*/

var Pet = function(nameIn, typeIn, ageIn) {
  this.name = nameIn;
  this.age = ageIn;
}

// Feel free to add more data here
var petOne = new Pet('Charlie', 'dog', 6);
var petTwo = new Pet('Thorin', 'rabbit', 4);

var pets = [petOne, petTwo];

$(readyNow); // Shorthand for $(document).ready(readyNow);

function readyNow(){
  appendDom();
}

function appendDom(){
  // Create a header
  $header = $('<h1>List of Pets - Loop and Append</h1>');
  $('.container').append($header);

  $table = $('<table></table>');
  $table.append('<thead><tr><th>Name</th><th>Type</th><th>Age</th></thead>')

  $tbody = $('<tbody id="tableBody"></tbody>');
  $table.append($tbody);

  $('.container').append($table);

  // YOUR CODE HERE

  // Display each of the pets on the DOM.

}
