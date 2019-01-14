$(document).ready(function(){
    $("#submit").click(function(){
        $.get("http://itunes.apple.com/search?term=" + $("#artist").val().toLocaleLowerCase(),processResults);
    });
});


function processResults(data){
    //empties previous results
    $("#container").empty();

    var result = JSON.parse(data);
    console.log(JSON.parse(data));

    var container = $("#container");
    var table = '<table class="w3-table w3-striped w3-bordered w3-large" id="table">';

    if(result.resultCount === 0){
        container.append("Sorry there are no results :(");
    }


    for(var i = 0; i < parseInt($("#options").val()); i++){
        var image = result.results[i].artworkUrl100;
        var audio = result.results[i].previewUrl;

        table += '<tr id="' + i + '">';
        table += '<td><img src=' + '"' + image + '"' + '></td>';
        table += "<td><div>Ranked #" + (i+1) + "</div><div>" + result.results[i].trackName + "</div><div>" + result.results[i].artistName + "</div><div>" + result.results[i].collectionName + "</div></td>";
        table += '<td><audio controls class="audio"> <source src="' + audio + '"></audio></td>';
    }

    table += '</tr></table>';
    container.append(table);
}