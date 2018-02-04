$("#create_post").on("click", function(event) {
  event.preventDefault();
  // Grab the form elements
  var post = {
    user_user_id: localStorage.getItem("user_id"),
    content: $("textarea[name='content']").val().trim(),
  };

  // Post form data to our api route that handles user login
  $.post("/api/create_post", post,
    function(data) {

    if(data) {
      localStorage.setItem("post_id", data.post_id);
    } else {
    // Add error handling in next release
    }

    // Clear the form when submitting
    $("textarea[name='content']").val("");

  });

});