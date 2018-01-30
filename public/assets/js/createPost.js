$("#create_post").on("click", function(event) {
  event.preventDefault();
  // Grab the form elements
  var post = {
    user_user_id: localStorage.getItem("user_id"),
    content: $("textarea[name='content']").val().trim(),
  };

  console.log("form post input: ", post);

  // Post form data to our api route that handles user login
  $.post("/api/create_post", post,
    function(data) {

    console.log("Data from db ", data);

    if(data) {
      localStorage.setItem("post_id", data.post_id);
      console.log("Successfully created post");
    } else {
      console.log("Failed to create post");
    }

    // Clear the form when submitting
    $("textarea[name='content']").val("");

  });

});