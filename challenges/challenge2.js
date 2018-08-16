/*
    Add an event listener to the Button that is created with the
    appendDom, that when you click the button, 'meow' is console.logged.
*/

$(document).ready(readyNow);

function readyNow(){
  appendDom();
  addClickHandlers();
}

function appendDom(){
  // Create a header
  let header = $('<h1>Click Event - Console Log</h1>');
  $('.container').append(header);

  $('.container').append('<div></div>');
  let $el = $('.container').children().last();
  $el.append('<button>Meow</button>');
}

function addClickHandlers() {
  // YOUR CODE HERE
<<<<<<< HEAD
  $('button').on('click', function() {
    console.log('Meow');
  });

=======
$('button').on('click', function() {
    console.log('Meow');
  });
>>>>>>> 1df9abed36dd9b4307d0a00344949578e193c6ad
}
