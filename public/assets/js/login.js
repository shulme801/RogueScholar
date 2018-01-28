$(document).ready(function(){

  // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
  $('.modal').modal();

  $('.modal').modal({
    dismissible: false, // Modal can be dismissed by clicking outside of the modal
    opacity: .5, // Opacity of modal background
    inDuration: 300, // Transition in duration
    outDuration: 200, // Transition out duration
    startingTop: '4%', // Starting top style attribute
    endingTop: '10%', // Ending top style attribute
    // ready: function(modal, trigger) { // Callback for Modal open. Modal and trigger parameters available.
    // alert("Ready");
    // console.log(modal, trigger);
    // },
    // complete: function() { alert('Closed'); } // Callback for Modal close
  });

  // Hides login modal if a value already exist in local storage
  if(localStorage.getItem("user_id")) {
    $('#loginmodal').modal('close');
  } else {
    $('#loginmodal').modal('open');
  }
  
});

$("#login").on("click", function(event) {
  event.preventDefault();

  // Grab the form elements
  var username = {
    username: $("input[name='username']").val().trim(),
  };

  console.log("form username input: ", username);

  // Post form data to our api route that handles user login
  $.post("/api/login_user", username,
    function(data) {

    console.log("Data from db ", data);

    if (data) {
      localStorage.setItem("user_id", data.user_id);
      console.log("Here is the stored user_id: ", data.user_id);
      $('#loginmodal').modal('close');
    } else {
      console.log("This user does not exist, please create user before logging in");
    }

    // Clear the form when submitting
    $("input[name='username']").val("");

  });

});

$("#logout").on("click", function(event) {

  localStorage.clear();
  console.log("You are now logged out!");
  $('#loginmodal').modal('open');

});


