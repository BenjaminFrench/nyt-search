// var searchTerm = "test";

$('#searchBtn').on('click', function (event) {
    event.preventDefault();
    var searchTerm = $('#searchTerm').val()
    
    var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    url += '?' + $.param({
        'api-key': "b9f91d369ff59547cd47b931d8cbc56b:0:74623931",
        'q': "trump"
    });
    $.ajax({
        url: url,
        method: 'GET',
    }).done(function(result) {
        console.log(result);
    }).fail(function(err) {
        throw err;
    });
    
})


