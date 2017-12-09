// var searchTerm = "test";
var total = 0;
$('#searchBtn').on('click', function (event) {
    event.preventDefault();
    var searchTerm = $('#searchTerm').val();
    var numResults = $('#numberRecords').val();
    var startDate = $('#startYear').val();
    var endDate = $('#endYear').val();

    if (startDate === '') {
        startDate = '1900';
    }
    if (endDate === '') {
        endDate = '2017';
    }
    startDate += '0101';
    endDate += '1231';
    
    var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    url += '?' + $.param({
        'api-key': "b9f91d369ff59547cd47b931d8cbc56b:0:74623931",
        'q': searchTerm,
        'begin_date': startDate,
        'end_date': endDate
    });
    $.ajax({
        url: url,
        method: 'GET',
    }).done(function(result) {
        response = result.response;
        console.log(response);

        for (let index = 0; index < numResults; index++) {
            total++;
            $('#queryResults').append(`
            <div class="card">
                <div class="body">
                    <h3 class="headline"><a href="${response.docs[index].web_url}">${total}. ${response.docs[index].headline.main}</a></h3>
                    <h5 class="author">${response.docs[index].byline.original}</h5>
                </div>
            </div>
            `)
        }
        // response.docs.array.forEach(element => {
            
        // });

    }).fail(function(err) {
        throw err;
    });
    
})

$('#clearBtn').on('click', function (event) {
    event.preventDefault();
    $('#queryResults').empty();
    total =0;
    
})

