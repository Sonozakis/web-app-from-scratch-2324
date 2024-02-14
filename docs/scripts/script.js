// CLICKABLE WINDOWS //
const showAbout = document.querySelector('header section ul li:nth-of-type(1) a');
const about = document.querySelector('main article:nth-of-type(1)');
const showFavs = document.querySelector('header section ul li:nth-of-type(2) a');
const favs = document.querySelectorAll('main > div > article');

// Event listener that opens article on click
document.addEventListener('click', function(event) {
  if (event.target === showAbout) {
    event.preventDefault(); // Prevents the default action of a
    about.classList.add('show'); // Opens the article
    showWindow(about); // Adds window animation
  } 
  else if (event.target === showFavs) {
    event.preventDefault();
    favs.forEach(article => {
      article.classList.add('show');
      showWindow(article); 
    });
  } 
  // Checks if the clicked button is the x button
  else if (event.target.closest('main > article > button') || event.target.closest('main > div > article > button')) {
    about.classList.remove('show'); // Removes the 'show' class from 'about'
    // Removes the 'show' class from each article inside 'favs' section
    favs.forEach(article => article.classList.remove('show'));
  }
});

// Function to add the window animation
function showWindow(element) {
  element.classList.add('window'); // Adds the 'window' class to element
  // When animation ends remove class
  element.addEventListener('animationend', () => {
    element.classList.remove('window');
  });
}



// JSON //
// Preloads everything
function loadData() {
  fetch('https://sonozakis.github.io/web-app-from-scratch-2324/scripts/favorites.json')
      .then(response => response.json())
      .then(data => {
          // Anime data
          document.querySelector('main div article:nth-of-type(1) div img').src = data.anime[0].image;
          document.querySelector('main div article:nth-of-type(1) div section h3').textContent = data.anime[0].name;
          document.querySelector('main div article:nth-of-type(1) div section p:nth-of-type(1)').textContent = `${data.anime[0].year}`;
          document.querySelector('main div article:nth-of-type(1) div section p:nth-of-type(2)').textContent = `${data.anime[0].information}`;

          // Game data
          document.querySelector('main div article:nth-of-type(2) div img').src = data.games[0].image;
          document.querySelector('main div article:nth-of-type(2) div section h3').textContent = data.games[0].name;
          document.querySelector('main div article:nth-of-type(2) div section p:nth-of-type(1)').textContent = `${data.games[0].year}`;
          document.querySelector('main div article:nth-of-type(2) div section p:nth-of-type(2)').textContent = `${data.games[0].information}`;

          // Music data
          document.querySelector('main > div article:nth-of-type(3) div img').src = data.music[0].image;
          document.querySelector('main > div article:nth-of-type(3) div section h3').textContent = data.music[0].name;
          document.querySelector('main > div article:nth-of-type(3) div section p').textContent = `${data.music[0].information}`;
      })

      // Error when JSON not loaded properly
      .catch(error => {
          console.error('Error loading favorites:', error);
      });
}

// Only loads data when web page is fully loaded
window.addEventListener('load', loadData);

// Stores index of each carousel
let animeIndex = 0;
let gamesIndex = 0;
let musicIndex = 0;

// Function to handle carousel navigation
function navigateCarousel(type, direction) {
  if (type === 'anime') {
    animeIndex = (animeIndex + direction + 5) % 5; // Used to loop carousel
    fetchAndLoadData();
  } else if (type === 'games') {
    gamesIndex = (gamesIndex + direction + 5) % 5; 
    fetchAndLoadData();
  } else if (type === 'music') {
    musicIndex = (musicIndex + direction + 5) % 5; 
    fetchAndLoadData();
  }
}

// Loads data into the carousel
function fetchAndLoadData() {
  fetch('https://sonozakis.github.io/web-app-from-scratch-2324/scripts/favorites.json')
    .then(response => response.json())
    .then(data => {
      // Updates html
      updateAnime(data.anime[animeIndex]);
      updateGames(data.games[gamesIndex]);
      updateMusic(data.music[musicIndex]);
    })
    .catch(error => {
      console.error('Error loading favorites:', error);
    });
}

// Updates anime data
function updateAnime(anime) {
  document.querySelector('main div article:nth-of-type(1) div img').src = anime.image;
  document.querySelector('main div article:nth-of-type(1) div section h3').textContent = anime.name;
  document.querySelector('main div article:nth-of-type(1) div section p:nth-of-type(1)').textContent = `${anime.year}`;
  document.querySelector('main div article:nth-of-type(1) div section p:nth-of-type(2)').textContent = `${anime.information}`;
}

// Updates games data
function updateGames(game) {
  document.querySelector('main div article:nth-of-type(2) div img').src = game.image;
  document.querySelector('main div article:nth-of-type(2) div section h3').textContent = game.name;
  document.querySelector('main div article:nth-of-type(2) div section p:nth-of-type(1)').textContent = `${game.year}`;
  document.querySelector('main div article:nth-of-type(2) div section p:nth-of-type(2)').textContent = `${game.information}`;
}

// Updates music data
function updateMusic(music) {
  document.querySelector('main > div article:nth-of-type(3) div img').src = music.image;
  document.querySelector('main > div article:nth-of-type(3) div section h3').textContent = music.name;
  document.querySelector('main > div article:nth-of-type(3) div section p').textContent = `${music.information}`;
}

// Previous and next buttons for each article
document.querySelector('main div article:nth-of-type(1) div:nth-of-type(2) button:nth-of-type(1)').addEventListener('click', () => navigateCarousel('anime', -1));
document.querySelector('main div article:nth-of-type(1) div:nth-of-type(2) button:nth-of-type(2)').addEventListener('click', () => navigateCarousel('anime', 1));

document.querySelector('main div article:nth-of-type(2) div:nth-of-type(2) button:nth-of-type(1)').addEventListener('click', () => navigateCarousel('games', -1));
document.querySelector('main div article:nth-of-type(2) div:nth-of-type(2) button:nth-of-type(2)').addEventListener('click', () => navigateCarousel('games', 1));

document.querySelector('main div article:nth-of-type(3) div:nth-of-type(2) button:nth-of-type(1)').addEventListener('click', () => navigateCarousel('music', -1));
document.querySelector('main div article:nth-of-type(3) div:nth-of-type(2) button:nth-of-type(2)').addEventListener('click', () => navigateCarousel('music', 1));



// ANIMATIONS //
// Error sound
const errorSound = new Audio('./sounds/errorsound.mp3');

// Listens for error button click
document.querySelector('header section button').addEventListener('click', function() {
    errorSound.play();

  setTimeout(() => {
    document.querySelector('header section').classList.add('shake');

    // Removes the shake class after the animation ends
    setTimeout(() => {
      document.querySelector('header section').classList.remove('shake');
    }, 500); //
  }, 100); // 100ms is the delay to match the sound
});
