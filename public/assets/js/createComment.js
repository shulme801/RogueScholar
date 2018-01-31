// Creates a comment and associates it with a post

$("#create_comment").on("click", function(event) {
  // event.preventDefault();
  event.preventDefault();

  // Grab the form elements
  var comment = {
    post_post_id: localStorage.getItem("post_id"),
    content: $("textarea[name='createComment']").val().trim(),
  };

  console.log("form comment input: ", comment);

  // Post form data to our api route that handles create comment
  $.post("/api/create_comment", comment,
    function(data) {

    console.log("Data from db ", data);

    if(data) {
      console.log("Successfully created comment");
    } else {
      console.log("Failed to create comment");
    }

    // Clear the form when submitting
    $("textarea[name='createComment']").val("");

  });

});