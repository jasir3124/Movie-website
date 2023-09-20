let texth1 = document.querySelector('.textH1');
let moviesStorage = JSON.parse(localStorage.getItem('savedMovies'))
let moviesArray = []

if (moviesStorage !== null && moviesStorage.length > 0) {
    let moviesArray = [...moviesStorage];
    texth1.innerHTML = moviesArray.join(', ');
  } else {
    texth1.innerText = 'You haven\'t liked any movies';
  }