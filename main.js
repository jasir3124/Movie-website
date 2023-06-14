
let movieBtn = document.getElementById('moviesButton');
let seriesBtn = document.getElementById('SeriesButton');
let netflixMoviesCont = document.getElementById('netflixMovies');
let netflixSeriesCont = document.getElementById('netflixSeries');
let huluMoviesCont = document.getElementById('huluMovies');
let huluSeriesCont = document.getElementById('huluSeries');

movieBtn.addEventListener('click', function() {
    anime({
        targets: ['#netflixSeries', '#huluSeries'],
        opacity: 0
    });
    anime({
        targets: ['#netflixMovies',  '#huluMovies'],
        opacity: 1
    });
    showMovies();
});

seriesBtn.addEventListener('click', function() {
    anime({
        targets: ['#netflixMovies', '#huluMovies'],
        opacity: 0
    });
    anime({
        targets: ['#netflixSeries', '#huluSeries'],
        opacity: 1
    });
    showSeries();
});

function showMovies() {
    netflixMoviesCont.style.display = 'block';
    netflixSeriesCont.style.display = 'none';
    huluMoviesCont.style.display = 'block';
    huluSeriesCont.style.display = 'none';
}

function showSeries() {
    netflixMoviesCont.style.display = 'none';
    netflixSeriesCont.style.display = 'block';
    huluMoviesCont.style.display = 'none';
    huluSeriesCont.style.display = 'block';
}

let netflixBtn = document.getElementById('netflixButton');
let huluBtn = document.getElementById('huluButton');
let netflixCont = document.getElementById('netflix');
let huluCont = document.getElementById('hulu');

netflixBtn.addEventListener('click', function() {
    anime({
        targets: '#hulu',
        opacity: 0
    });
    anime({
        targets: '#netflix',
        opacity: 1
    });
    netflixCont.style.display = 'block';
    huluCont.style.display = 'none';
});

huluBtn.addEventListener('click', function() {
    anime({
        targets: '#netflix',
        opacity: 0
    });
    anime({
        targets: '#hulu',
        opacity: 1
    });
    huluCont.style.display = 'block';
    netflixCont.style.display = 'none';
});