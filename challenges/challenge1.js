/*
  Add a DIV to the Container Class (a new DIV inside of the DIV that already exists).
  Inside the DIV, add a P tag that has your name
  Then add another P tag with the City you live in.
*/

$(document).ready(readyNow);

function readyNow(){
  // Call the append to dom function here
  appendDom();
}

function appendDom(){
  //Write Append Dom Code Here
  let header = $('<h1>Your Name - Append to DOM</h1>');
  $('.container').append(header);

  // YOUR CODE HERE
}
