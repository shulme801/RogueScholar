//$(document).ready(function() {

    $("#inspired-button").on("click", function() {
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


    $("#home-button").click(function() {
        app.get("/", function(req, res) {
            res.render("index");
        });
    });

    $("#inspired-button").click(function() {
        app.get("/news", function(req, res) {
            res.render("news");
        });
    });

    $("#join-button").click(function() {
        app.get("/post", function(req, res) {
            res.render("post");
        });
    });

//});