$(document).ready(function(){
    $("#submit").click(function(){
        $.ajax({
            url: "https://itunes.apple.com/search?term=" + $("#artist").val(),
            type: 'GET',
            crossDomain: true,
            dataType: 'jsonp',
            success: function (result) {
                processResults(result);
            },
            error: function () {
                alert('Failed!');
            }
        });
    });
});


function processResults(data){
    //empties previous results
    $("#container").empty();

    var container = $("#container");
    var table = '<table class="w3-table w3-striped w3-bordered w3-large" id="table">';

    if(data.resultCount === 0){
        container.append("Sorry there are no results :(");
    }

    for(var i = 0; i < parseInt($("#options").val()); i++){
        var image = data.results[i].artworkUrl100;
        var audio = data.results[i].previewUrl;

        table += '<tr id="' + i + '">';
        table += '<td><img src=' + '"' + image + '"' + '></td>';
        table += "<td><div>Ranked #" + (i+1) + "</div><div>" + data.results[i].trackName + "</div><div>" + data.results[i].artistName + "</div><div>" + data.results[i].collectionName + "</div></td>";
        table += '<td><audio controls class="audio"> <source src="' + audio + '"></audio></td>';
    }

    table += '</tr></table>';
    container.append(table);
}