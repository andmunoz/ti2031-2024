$(document).ready(function() {
    $.ajax({
        url: 'https://pokeapi.co/api/v2/pokemon',
        datatype: 'json',
        success: function(data){
            let htmlResults = '';
            htmlResults += '<p>' + data.count + ' pokemones cargados...</p>';
            htmlResults += '<ol>';
            for(let p of data.results) {
                htmlResults += '<li>' + p.name + '</li>';
            }
            htmlResults += '</ol>';
            $('#results').html(htmlResults);
        }, 
        error: function(){
            console.log('Error to retrieve data');
        }
        }
    );
});