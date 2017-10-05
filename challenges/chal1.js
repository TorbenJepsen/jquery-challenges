/*
  Add a DIV to the Container Class.
  Inside the DIV, add a P tag that has your name
  Then add another P tag with the City you live in.
*/

$(document).ready(readyNow);

function readyNow(){
  // Call the append to dom function here

  // YOUR CODE HERE
  
}

function appendDom(){
  //Write Append Dom Code Here
  $header = $('<h1>Your Name - Append to DOM</h1>');
  $('.container').append($header);

  // YOUR CODE HERE
}
