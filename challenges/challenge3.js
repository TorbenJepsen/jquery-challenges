/*
  Appending to the DOM. Take input from an input field
  and display it on the DOM.
*/
$(document).ready(readyNow);

function readyNow(){
  appendDom();
  addClickHandlers();
}

// You should not need to modify this function
function appendDom(){
  // Create a header
  let header = $('<h1>Student List - Text Input</h1>');
  $('.container').append(header);

  // Create a text input
  let inputBox = $('<input type="text" id="studentName" />');
  $('.container').append(inputBox);

  // Create a submit button
  let submitButton = $('<button id="submitButton">Submit</button>');
  $('.container').append(submitButton);

  let studentList = $('<ul id="studentList"></ul>');
  studentList.append('<li>Sample Student</li>');
  $('.container').append(studentList);
}


function addClickHandlers() {
  // YOUR CODE HERE
  $('#submitButton').on('click', function() {
<<<<<<< HEAD
    $('#studentList').append('<li>'+ $('#studentName').val()+'</li>');
    $('#studentName').val('');
  });
 
=======
    $('#studentName').append('<li>'+ inputBox + '</li>');
  });

>>>>>>> 1df9abed36dd9b4307d0a00344949578e193c6ad
  // When the submit button is clicked, the name from
  // the input box should appear in the student list.

}
