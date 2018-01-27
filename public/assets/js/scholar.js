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