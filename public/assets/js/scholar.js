$(document).ready(function() {
    $("#search-btn").on("click", function() {
        console.log("testing")
        getNews();
    });

    function getNews() {
        $.get("/news", function(data) {
            console.log(data);
            $("#source").text(data.source.name);
            $("#author").text(data.author);
            $("#title").text(data.title);
            $("#description").text(data.description);
            //$("#url").text(data.url);
            $("#urlToImage").text(data.urlToImage);
            $("#publishedAt").text(data.publishedAt);
            var img = $('<img id="urlToImage">'); //Equivalent: $(document.createElement('img'))
                img.attr('src', urlToImage);
                img.appendTo('#img');
            var thelink = $('<a>',{
                text: 'Click to view article',
                href: url,
                target: '_blank'
                }).appendTo('#url');
        });    
    };
    getNews();
});

$("#home-button").onclick(function() {
    app.get("/", function(req, res) {
        // Handlebars requires an object to be sent to the dog handlebars file.
        // Lucky for us, animals[0] is an object!
      
        // 1. send the dog object from the animals array to the dog handlebars file.
        res.render("index");
      });
})

$("#inspired-button").onclick(function() {
    app.get("/news", function(req, res) {
        // Handlebars requires an object to be sent to the dog handlebars file.
        // Lucky for us, animals[0] is an object!
      
        // 1. send the dog object from the animals array to the dog handlebars file.
        res.render("news");
      });
})

$("#join-button").onclick(function() {
    app.get("/post", function(req, res) {
        // Handlebars requires an object to be sent to the dog handlebars file.
        // Lucky for us, animals[0] is an object!
      
        // 1. send the dog object from the animals array to the dog handlebars file.
        res.render("post");
      });
})