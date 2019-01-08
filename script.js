// function getQueryParameter(name)
// {
//     var query = window.location.search.substring(1);
//     var vars = query.split("&");
//     for (var i=0;i<vars.length;i++) {
//         var pair = vars[i].split("=");
//         if(pair[0] == name){return pair[1];}
//     }
//     return false;
// }

$(document).ready(function(){
    $("#submit").click(function(){
        $("#songName").empty();
        $.get("http://itunes.apple.com/search?term=" + $("#artist").val(),processResults);
    });
});



function processResults(data){
    var result = JSON.parse(data);

    for(var i = 0; i < parseInt($("#options").val()); i++){
        $("#songName").append(result.results[i].trackName + "<br>")
    }
}
