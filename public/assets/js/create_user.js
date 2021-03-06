$("#createUser").on("click", function(event) {
  event.preventDefault();

  // Grab the form elements
  var username = {
    username: $("input[name='createUsername']").val().trim(),
  };


  // This line is the magic. It"s very similar to the standard ajax function we used.
  // Essentially we give it a URL, we give it the object we want to send, then we have a "callback".
  // The callback is the response of the server. In our case, we set up code in api-routes that "returns" true or false
  // depending on if a tables is available or not.

  $.post("/api/create_user", username,
    function(data) {

    // Clear the form when submitting
    $("input[name='createUsername']").val("");

  });

});


