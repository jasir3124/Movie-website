let moviesBtn = document.querySelector(".moviesButton");
let seriesBtn = document.querySelector(".SeriesButton");

moviesBtn.addEventListener("click", function () {
  anime({
    targets: [".spiderManSeries"],
    opacity: 0,
  });
  anime({
    targets: [".spiderManMovies"],
    opacity: 1,
  });
  document.querySelector(".spiderManMovies").style.display = "block";
  document.querySelector(".spiderManSeries").style.display = "none";
});

seriesBtn.addEventListener("click", function () {
    anime({
        targets: [".spiderManMovies"],
        opacity: 0,
      });
      anime({
        targets: [".spiderManSeries"],
        opacity: 1,
      });
  document.querySelector(".spiderManSeries").style.display = "block";
  document.querySelector(".spiderManMovies").style.display = "none";
});
