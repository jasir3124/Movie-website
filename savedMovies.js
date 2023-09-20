let texth1 = document.querySelector(".textH1");
let moviesStorage = JSON.parse(localStorage.getItem("savedMovies"));
let moviesArray = [];

if (moviesStorage !== null && moviesStorage.length > 0) {
  moviesArray = [...moviesStorage];
} else {
  texth1.innerText = "You haven't liked any movies or series";
}

function createMovieCard(src) {
  let moviesContainer = document.querySelector(".moviesCont");
  let movieCardCont = document.createElement("div");
  let movieImage = document.createElement("img");
  let saveicon = createButton()
  movieCardCont.classList.add("d-grid", "justify-content-center");
  movieImage.setAttribute("src", src);
  movieImage.classList.add("border", "border-black", "movieImg");
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
    let iconText = icon.lastElementChild

    if (checkIfContains(icon, "saveIconActive")) {
      moviesArray.push(image);
      localStorage.setItem("savedMovies", JSON.stringify(moviesArray));
      console.log(moviesArray);
      iconText.innerHTML = 'Unsave'
    } else {
      moviesArray.splice(movieIndex, 1);
      localStorage.setItem("savedMovies", JSON.stringify(moviesArray));
      console.log(moviesArray);
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


function createButton(){
  const button = document.createElement('button');
  button.className = 'bookmarkBtn mt-3 saveIcon saveIconActive';
  
  const span = document.createElement('span');
  span.className = 'IconContainer';
  
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('viewBox', '0 0 384 512');
  svg.setAttribute('height', '0.9em');
  svg.className = 'icon';
  
  const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  path.setAttribute('d', 'M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z');
  
  svg.appendChild(path);
  span.appendChild(svg);
  
  
  const paragraph = document.createElement('p');
  paragraph.className = 'text m-0';
  paragraph.textContent = 'Unsave';
  
  
  button.appendChild(span);
  button.appendChild(paragraph);

  return button;
}
// localStorage.clear();