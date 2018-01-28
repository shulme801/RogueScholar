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
    } else {
      console.log("This user does not exist, please create user before logging in");
    }

    // Clear the form when submitting
    $("input[name='username']").val("");

  });

});


