let movieBtn = document.getElementById('moviesButton')
let seriesBtn = document.getElementById('SeriesButton')
let moviesCont = document.getElementById('movies')
let seriesCont = document.getElementById('series')

movieBtn.addEventListener('click', function() {
    anime({
        targets: '#series',
        opacity: 0
    })
    anime({
        targets: '#movies',
        opacity: 1
    })
    showMovies()
})
seriesBtn.addEventListener('click', function() {
    anime({
        targets: '#movies',
        opacity: 0
    })
    anime({
        targets: '#series',
        opacity: 1
    })
    showSeries()
})
function showMovies(){
    moviesCont.style.display = 'block'
    seriesCont.style.display = 'none'
}
function showSeries(){
    seriesCont.style.display = 'block'
    moviesCont.style.display = 'none'
}