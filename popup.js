document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('word').focus();

    document.getElementById('search').addEventListener('click', function() {
        searchWord();
    });

    document.getElementById('word').addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            searchWord();
        }
    });
});

function searchWord() {
    var word = document.getElementById('word').value;
    if (word) {
        const url = 'https://www.vandale.nl/gratis-woordenboek/nederlands/betekenis/' + encodeURIComponent(word);
        window.open(url, '_blank');
    }
}