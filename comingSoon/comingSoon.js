let movieBtn = document.querySelector(".moviesButton")
let seriesBtn = document.querySelector(".SeriesButton")

movieBtn.addEventListener("click", function(){
    anime({
        targets: ".seriesComingSoon",
        opacity: 0
    })
    anime({
        targets: ".moviesComingSoon",
        opacity: 1
    })
    document.querySelector(".seriesComingSoon").style.display = "none"
    document.querySelector(".moviesComingSoon").style.display = "block"
})
seriesBtn.addEventListener("click", function(){
    anime({
        targets: ".moviesComingSoon",
        opacity: 0
    })
    anime({
        targets: ".seriesComingSoon",
        opacity: 1
    })
    document.querySelector(".moviesComingSoon").style.display = "none"
    document.querySelector(".seriesComingSoon").style.display = "block"
})
