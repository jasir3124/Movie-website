let moviesArray = [];
let saveIcons = document.querySelectorAll(".saveIcon");

saveIcons.forEach(function (saveIcon) {
  saveIcon.addEventListener("click", function () {
    saveIcon.classList.toggle("saveIconActive");

    let image =
      saveIcon.previousElementSibling.firstElementChild.getAttribute("src");

      let iconText = saveIcon.lastElementChild

      console.log(iconText);

    let imageIndex = moviesArray.indexOf(image);

    let className = "saveIconActive";

    if (checkIfContains(saveIcon, className)) {
      moviesArray.push(image);
      localStorage.setItem("savedMovies", JSON.stringify(moviesArray));
      console.log(moviesArray)
      iconText.innerHTML = 'Unsave'
    } else {
      moviesArray.splice(imageIndex, 1);
      localStorage.setItem("savedMovies", JSON.stringify(moviesArray));
      console.log(moviesArray)
      iconText.innerHTML = 'Save'
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
      let iconText = icon.lastElementChild
    for (let i = 0; i < moviesArray.length; i++) {
      let movieName = moviesArray[i];
      if (image === movieName) {
        icon.classList.add("saveIconActive");
        iconText.innerHTML = 'Unsave'
      }
    }
  });
});
