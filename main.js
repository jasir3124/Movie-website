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

let moviesArray = [];
let saveIcons = document.querySelectorAll(".saveIcon");

saveIcons.forEach(function (saveIcon) {
  saveIcon.addEventListener("click", function () {
    saveIcon.classList.toggle("saveIconActive");

    let image =
      saveIcon.previousElementSibling.firstElementChild.getAttribute("src");

    let imageIndex = moviesArray.indexOf(image);

    console.log(moviesArray)

    let className = "saveIconActive";

    if (checkIfContains(saveIcon, className)) {
      moviesArray.push(image);
      localStorage.setItem("savedMovies", JSON.stringify(moviesArray));
    } else {
      moviesArray.splice(imageIndex, 1);
      localStorage.setItem("savedMovies", JSON.stringify(moviesArray));
    }
  });
});

function checkIfContains(arg, arg2) {
  if (arg.classList.contains(arg2)) {
    return true;
  } else {
    return false;
  }
}

window.addEventListener("load", function () {
  let moviesStorage = JSON.parse(localStorage.getItem("savedMovies"));
  if (moviesStorage) {
    moviesArray.push(...moviesStorage)
  }
  saveIcons.forEach(function (icon) {
    let image =
      icon.previousElementSibling.firstElementChild.getAttribute("src");
    for (let i = 0; i < moviesArray.length; i++) {
      let movieName = moviesArray[i];
      if (image === movieName) {
        icon.classList.add("saveIconActive");
      }
    }
  });
});

// localStorage.clear()