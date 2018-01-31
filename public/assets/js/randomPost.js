$(document).ready(function(){

  // Pulls in random post from our post model and stores it in local storage
  $.get("/api/random_post", function(data) {

    console.log("Random Post Data from db ", data);

    if (data) {
      localStorage.setItem("post_id", data.post_id);
      console.log("Here is the stored post_id: ", data.post_id);
    } else {
      console.log("Did not pull in a random post from the db!");
    }
    //Michael's recursion thought was genius
    writeRandomPost(data);

  });


  function writeRandomPost(data) {

    $("#randomPostContent").text(data.content);
    // $("#randomPostContent").append(data.Comments[0].content);
    for (var i = 0; i < data.Comments.length; i++) {
      $("#randomPostContent").append("<br>");
      $("#randomPostContent").append(data.Comments[i].content);
    };

  }

});




