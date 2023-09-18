let movieBtn = document.getElementById("moviesButton");
let seriesBtn = document.getElementById("SeriesButton");
let netflixMoviesCont = document.getElementById("netflixMovies");
let netflixSeriesCont = document.getElementById("netflixSeries");
let huluMoviesCont = document.getElementById("huluMovies");
let huluSeriesCont = document.getElementById("huluSeries");
let HBOSerieasCont = document.getElementById("HBOSeries");
let HBOMoviesCont = document.getElementById("HBOMovies");

movieBtn.addEventListener("click", function () {
  anime({
    targets: ["#netflixSeries", "#huluSeries", "#HBOSeries"],
    opacity: 0,
  });
  anime({
    targets: ["#netflixMovies", "#huluMovies", "#HBOMovies"],
    opacity: 1,
  });
  showMovies();
});

seriesBtn.addEventListener("click", function () {
  anime({
    targets: ["#netflixMovies", "#huluMovies", "#HBOMovies"],
    opacity: 0,
  });
  anime({
    targets: ["#netflixSeries", "#huluSeries", "#HBOSeries"],
    opacity: 1,
  });
  showSeries();
});

function showMovies() {
  netflixMoviesCont.style.display = "block";
  netflixSeriesCont.style.display = "none";
  huluMoviesCont.style.display = "block";
  huluSeriesCont.style.display = "none";
  HBOMoviesCont.style.display = "block";
  HBOSerieasCont.style.display = "none";
}

function showSeries() {
  netflixMoviesCont.style.display = "none";
  netflixSeriesCont.style.display = "block";
  huluMoviesCont.style.display = "none";
  huluSeriesCont.style.display = "block";
  HBOMoviesCont.style.display = "none";
  HBOSerieasCont.style.display = "block";
}

let netflixBtn = document.getElementById("netflixButton");
let huluBtn = document.getElementById("huluButton");
let HBOBtn = document.getElementById("HBOButton");
let netflixCont = document.getElementById("netflix");
let huluCont = document.getElementById("hulu");
let HBOCont = document.getElementById("HBO");

netflixBtn.addEventListener("click", function () {
  anime({
    targets: ["#hulu", "#HBO"],
    opacity: 0,
  });
  anime({
    targets: "#netflix",
    opacity: 1,
  });
  netflixCont.style.display = "block";
  huluCont.style.display = "none";
  HBOCont.style.display = "none";
});

huluBtn.addEventListener("click", function () {
  anime({
    targets: ["#netflix", "#HBO"],
    opacity: 0,
  });
  anime({
    targets: "#hulu",
    opacity: 1,
  });
  huluCont.style.display = "block";
  netflixCont.style.display = "none";
  HBOCont.style.display = "none";
});

HBOBtn.addEventListener("click", function () {
  anime({
    targets: ["#netflix", "#hulu"],
    opacity: 0,
  });
  anime({
    targets: "#HBO",
    opacity: 1,
  });
  HBOCont.style.display = "block";
  huluCont.style.display = "none";
  netflixCont.style.display = "none";
});

let imagesArray = [];
let saveIcons = document.querySelectorAll(".saveIcon");


saveIcons.forEach(function (saveIcon) {
  saveIcon.addEventListener("click", function () {
    saveIcon.classList.toggle("saveIconActive");
    let image =
      saveIcon.previousElementSibling.firstElementChild.getAttribute("src");
    let imageIndex = imagesArray.indexOf(image);
    if (saveIcon.classList.contains("saveIconActive")) {
      imagesArray.push(image);
      console.log(imagesArray);
    } else {
      imagesArray.splice(imageIndex, 1);
    }
  });
});