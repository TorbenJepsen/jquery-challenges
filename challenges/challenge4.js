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
  displayPets();
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

  let input = $('<input id="inputBox1" placeholder="Name"/><input id="inputBox2" placeholder="Type" /><input id ="inputBox3" placeholder="Age"/>');
  $('.container').append(input);

  let button= $('<button id="submitButton">Add Pet</button>');
  $('.container').append(button);
  $('#submitButton').on('click', addPet);

  let button2 = $('<button id="deleteButton">Remove Pets</button>')
  $('.container').append(button2);
  $('#deleteButton').on('click', removePets);


  function addPet() {
    const pet = new Pet(
      $('#inputBox1').val(),
      $('#inputBox2').val(),
      $('#inputBox3').val(),
    );

    pets.push(pet);
    $('#tableBody').append('<tr><td>'+$('#inputBox1').val()+'</td><td>'+$('#inputBox2').val()+'</td><td>'+$('#inputBox3').val()+ '</td></tr>');
    $('input').val('');
  }

  function removePets(){
    $('#tableBody').empty();
    console.log('delete clicked');
  }
  // YOUR CODE HERE

  
  // Display each of the pets on the DOM.

}
function displayPets(){
$(function() {
  $.each(pets, function (){
    console.log(this.name);
    console.log(this.age);
    console.log(this.type);
    $('#tableBody').append('<tr><td>'+this.name+'</td><td>'+ this.type+'</td><td>'+this.age + '</td></tr>');
  })
})
}