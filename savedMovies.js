let texth1 = document.querySelector(".textH1");
let moviesStorage = JSON.parse(localStorage.getItem("savedMovies"));
let moviesArray = [];

if (moviesStorage !== null && moviesStorage.length > 0) {
  moviesArray = [...moviesStorage];
} else {
  texth1.innerText = "You haven't liked any movies";
}

function createMovieCard(src) {
  let moviesContainer = document.querySelector(".moviesCont");
  let movieCardCont = document.createElement("div");
  let movieImage = document.createElement("img");
  let saveicon = document.createElement("i");
  movieCardCont.classList.add("d-grid", "justify-content-center");
  movieImage.setAttribute("src", src);
  movieImage.classList.add("border", "border-black", "movieImg");
  saveicon.classList.add(
    "saveIcon",
    "ms-5",
    "ps-4",
    "pt-3",
    "fa-2x",
    "fa-solid",
    "fa-heart",
    "saveIconActive"
  );
  saveicon.setAttribute("style", "color: white");
  moviesContainer.appendChild(movieCardCont);
  movieCardCont.appendChild(movieImage);
  movieCardCont.appendChild(saveicon);
}

moviesArray.forEach(function (movie) {
  createMovieCard(movie);
});

let saveIcon = document.querySelectorAll(".saveIcon");

saveIcon.forEach(function (icon) {
  icon.addEventListener("click", function () {
    icon.classList.toggle("saveIconActive");

    let image = icon.parentElement.firstChild.getAttribute("src");
    let movieIndex = moviesArray.indexOf(image);

    if (checkIfContains(icon, "saveIconActive")) {
      moviesArray.push(image);
      localStorage.setItem("savedMovies", JSON.stringify(moviesArray));
      console.log(moviesArray);
    } else {
      moviesArray.splice(movieIndex, 1);
      localStorage.setItem("savedMovies", JSON.stringify(moviesArray));
      console.log(moviesArray);
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
